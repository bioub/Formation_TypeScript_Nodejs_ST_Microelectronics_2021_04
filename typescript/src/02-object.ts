interface ButtonOptions {
  value: string;
  height?: number;
  width?: number;
  [key: string]: any;
}

function createButton(options: ButtonOptions) {

}

createButton({
  value: 'Click me',
  height: 30,
  width: 100,
  other: 'test',
  other2: 'test2',
});
