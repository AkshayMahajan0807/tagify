class TagifyClass {
  #tagify;
  #keyID;
  #keyValue;
  /**
   *
   * @param {string} tagifyID
   * @param {[]} dropdownList
   * @param {string} keyID
   * @param {string} keyValue
   */
  constructor(tagifyID, dropdownList = [], keyID, keyValue) {
    this.#keyID = keyID;
    this.#keyValue = keyValue;
    const tagifyInputSelector = document.querySelector(`#${tagifyID}`);
    this.#tagify = new Tagify(tagifyInputSelector, {
      whitelist: this.createTagifyFormatedArrayList(dropdownList),
      dropdown: {
        position: "input",
        enabled: 0, // always opens dropdown when input gets focus
      },
    });
  }

  /**
   *
   * @param {[{}]} arrayList
   */
  createTagifyFormatedArrayList(arrayList) {
    console.log(arrayList);
    return arrayList.map((item) => {
      return {
        id: item[this.#keyID],
        value: item[this.#keyValue],
      };
    });
  }

  getTagify() {
    return this.#tagify;
  }
  getID() {
    /**
     * @type{[{}]}
     */
    const selectedIDArray = this.#tagify.value.map((item) => item.id);
    console.log(selectedIDArray);
  }
  getValues() {
    const selectedValueArray = this.#tagify.value.map((item) => item.value);
    console.log(selectedValueArray);
  }
}

const tag = new TagifyClass(
  "tags-outside",
  [
    { id: 1, name: "akshay", lastName: "mahajan" },
    { id: 2, name: "mayur", lastName: "patil" },
    { id: 3, name: "shubham", lastName: "mahajan" },
  ],
  "id",
  "name"
);
