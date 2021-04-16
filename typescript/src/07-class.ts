class Logger {
  // private writer: Writer;

  // constructor(writer: Writer) {
  //   this.writer = writer;
  // }
  constructor(private writer: Writer) {}

  log(msg: string) {
    this.writer.write(msg);
  }
}

interface Writer {
  write(msg: string): void;
}

class FileWriter implements Writer {
  write() {
    // todo write file
  }
}

const fileWriter = new FileWriter();
const logger = new Logger(fileWriter);

logger.log('Message');
