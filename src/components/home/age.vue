<template>
  <b-col md="6" v-if="items">
    <apexchart height="400" type="bar" ref="chart" :options="options" :series="series"></apexchart>
  </b-col>
  <b-col v-else md="6" class="d-flex align-items-center justify-content-center">
    <p class="text-muted">No data.</p>
  </b-col>
</template>

<script>
export default {
  name: 'age',
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    options() {
      return {
        title: {
          text: 'Age Diversity',
          align: 'center',
          style: {
            fontSize: '16px',
          },
        },
        xaxis: {
          categories: ['Age < 21', '21-25', '26-30', '31-35', '36-40', '41-45', 'Age > 45'],
        },
        chart: {
          id: 'age-chart',
        },
        dataLabels: {
          enabled: true,
        },
      };
    },
  },
  data() {
    return {
      series: [
        { name: 'Ages', data: [0, 0, 0, 0, 0, 0, 0] },
      ],
    };
  },
  created() {
    this.generateSeries(this.items);
  },
  methods: {
    generateSeries(data) {
      data.forEach((item) => {
        if (item.age < 21) {
          this.series[0].data[0] += 1;
        } else if (item.age > 20 && item.age <= 25) {
          this.series[0].data[1] += 1;
        } else if (item.age > 25 && item.age <= 30) {
          this.series[0].data[2] += 1;
        } else if (item.age > 30 && item.age <= 35) {
          this.series[0].data[3] += 1;
        } else if (item.age > 35 && item.age <= 40) {
          this.series[0].data[4] += 1;
        } else if (item.age > 40 && item.age <= 45) {
          this.series[0].data[5] += 1;
        } else {
          this.serial[0].data[6] += 1;
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
