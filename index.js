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
   * @description keyID and keyValue it is purpose for to generate
   * key value pair format as per tagify mean like [{id:"",value:""}]
   *
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

  /**
   * @description get to the id list
   */
  getID() {
    const selectedIDArray = this.#tagify.value.map((item) => item.id);
    console.log(selectedIDArray);
  }

  /**
   * @description get to the values list
   */
  getValues() {
    const selectedValueArray = this.#tagify.value.map((item) => item.value);
    console.log(selectedValueArray);
  }
  /**
   *
   * @returns {[]}
   */
  getKeyValuesPairList() {
    return this.#tagify.value.map((item) => ({
      id: item.id,
      value: item.value,
    }));
  }

  /**
   *
   * @param {[]} tagList
   */
  addTagsList(tagList) {
    this.#tagify.addTags(tagList);
  }
}

const tag = new TagifyClass(
  "tags-outside",
  [
    { id: 1, name: "a", lastName: "m" },
    { id: 2, name: "d", lastName: "p" },
    { id: 3, name: "s", lastName: "n" },
  ],
  "id",
  "name"
);
