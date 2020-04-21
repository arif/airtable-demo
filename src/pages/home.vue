<template>
  <b-row>
    <b-col md="12">
      <h5>Age Diversity</h5>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  created() {
    // this.getContent();
    this.getContent2();
  },
  data() {
    return {
      items: null,
      apiURL: 'https://api.airtable.com/v0/',
      baseURL: 'appZzXlGfI5VxtbkT/Table%201',
      apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
    };
  },
  methods: {
    getContent() {
      this.$store.dispatch('home/getRecords', {
        table: 'Table 1',
        params: {
          // fields: ['Age'],
        },
      }).then(() => {
        // console.log(response);
      });
    },
    getContent2() {
      axios({
        url: `${this.apiURL}${this.baseURL}`,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
        params: {
          fields: ['Name', 'Nationality', 'Gender', 'Profession', 'Age', 'Relationship'],
        },
      }).then((response) => {
        if (response && response.status === 200) {
          const results = response && response.data.records;
          this.items = results && results.map((item) => ({
            id: item.id,
            name: item.fields.Name,
            nationality: item.fields.Nationality,
            gender: item.fields.Gender,
            profession: item.fields.Profession,
            age: item.fields.Age,
            relationship: item.fields.Relationship,
          }));
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
