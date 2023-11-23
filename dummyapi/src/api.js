// src/api.js


export const dummyAPI = {
    data: [
      { name: 'John', age: 25 },
      { name: 'Alice', age: 30 },
    ],
  
    getAllData() {
      return this.data;
    },
  
    addData(newData) {
      this.data.push(newData);
    },
  
    updateData(index, updatedData) {
      if (index >= 0 && index < this.data.length) {
        this.data[index] = updatedData;
      }
    },
  
    deleteData(index) {
      if (index >= 0 && index < this.data.length) {
        this.data.splice(index, 1);
      }
    },
  };
  

  
  