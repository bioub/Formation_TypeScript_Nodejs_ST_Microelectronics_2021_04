import fs from 'fs-extra';
import path from 'path';
import md5 from 'md5';
import Terser from 'terser';
import minimist from 'minimist';

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndMkdir() {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  const buffer = Buffer.concat(buffers);
  await fs.writeFile(appJsDistPath, buffer);
}

async function buildHtml() {
  let content = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  content = content.replace(/<script.*<\/script>/s, '<script src="app.js"></script>');

  await fs.writeFile(indexHtmlDistPath, content);
}

async function minifyJs() {
  const content = await fs.readFile(appJsDistPath, { encoding: 'utf-8' });
  const { code } = await Terser.minify(content);

  await fs.unlink(appJsDistPath);
  await fs.writeFile(appJsDistPath, code);
}

async function hashFilename() {
  const contentApp = await fs.readFile(appJsDistPath, { encoding: 'utf-8' });
  const hash = md5(contentApp);
  await fs.unlink(appJsDistPath);

  const filename = `app.${hash}.js`;
  await fs.writeFile(appJsDistPath.replace('app.js', filename), contentApp);

  let contentHtml = await fs.readFile(indexHtmlDistPath, { encoding: 'utf-8' });

  contentHtml = contentHtml.replace('app.js', filename);

  await fs.unlink(indexHtmlDistPath);
  await fs.writeFile(indexHtmlDistPath, contentHtml);
}

const argv = minimist(process.argv.slice(2));

(async () => {
  await rmAndMkdir();
  await buildJs();
  await buildHtml();

  if (argv.minify) {
    await minifyJs();
  }

  if (argv.hash) {
    await hashFilename();
  }
})();
