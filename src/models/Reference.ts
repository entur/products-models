class Reference {
  nameOfClass: string;
  ref: string;
  version: string;
  constructor({ nameOfClass = '', ref = '', id = '', version = '' }) {
    this.nameOfClass = nameOfClass;
    this.ref = ref || id;
    this.version = version;
  }

  equalsWithoutVersion(object: Reference) {
    return object.nameOfClass === this.nameOfClass && object.ref === this.ref;
  }
}

export default Reference;
