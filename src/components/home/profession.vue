<template>
  <b-col v-if="items" md="6">
    <apexchart height="400" type="bar" ref="chart" :options="options" :series="series"></apexchart>
  </b-col>
  <b-col v-else md="6" class="d-flex align-items-center justify-content-center">
    <p class="text-muted">No data.</p>
  </b-col>
</template>

<script>
export default {
  name: 'profession',
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    options() {
      return {
        title: {
          text: 'Profession Diversity',
          align: 'center',
          style: {
            fontSize: '16px',
          },
        },
        xaxis: {
          categories: [...new Set(this.items.map((item) => item.profession))].sort((a, b) => a.localeCompare(b)),
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
        { name: 'Profession', data: [0, 0, 0, 0, 0, 0, 0] },
      ],
    };
  },
  created() {
    this.generateSeries(this.items);
  },
  methods: {
    generateSeries(data) {
      data.forEach((item) => {
        if (item.profession === 'Actor') {
          this.series[0].data[0] += 1;
        } else if (item.profession === 'Doctor') {
          this.series[0].data[1] += 1;
        } else if (item.profession === 'Economist') {
          this.series[0].data[2] += 1;
        } else if (item.profession === 'Electrical&Electronical Engineer') {
          this.series[0].data[3] += 1;
        } else if (item.profession === 'Mechatronics Engineer') {
          this.series[0].data[4] += 1;
        } else if (item.profession === 'Soccer Player') {
          this.series[0].data[5] += 1;
        } else {
          this.series[0].data[6] += 1;
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
