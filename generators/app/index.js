var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('name', {
      type: String,
      desc: 'Your C64 project name',
      required: true,
    });
    this.option('description', {
      type: String,
      desc: 'Your C64 project description',
      required: false
    });
    this.option('authorName', {
      type: String,
      desc: 'Your name',
      required: false,
    });
    this.props = {};
  }

  async prompting() {
    const answers = [
      {
        type: "input",
        name: "name",
        message: "Your C64 project name",
        default: "myC64Project",
        when: this.options.name === undefined
      },
      {
        type: "input",
        name: "description",
        message: "Your C64 project description",
        when: this.options.description === undefined
      },
      {
        type: "input",
        name: "authorName",
        message: "Your name",
        when: this.options.authorName === undefined
      },
    ];

    return await this.prompt(answers).then((props) => {
        this.props = {
          name: this.options.name,
          description: this.options.description,
          authorName: this.options.authorName,
          ...props
        };
      });
  }

  writing() {
    this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        this.props
    );
    this.fs.copy(
        this.templatePath('src/helloworld.prg'),
        this.destinationPath('src/helloworld.prg'),
    );
    this.fs.copy(
        this.templatePath('src/README.md'),
        this.destinationPath('src/README.md'),
    );
    this.fs.copy(
        this.templatePath('d64/README.md'),
        this.destinationPath('d64/README.md'),
    );
    this.fs.copy(
        this.templatePath('bin/README.md'),
        this.destinationPath('bin/README.md'),
    );
  }
};
