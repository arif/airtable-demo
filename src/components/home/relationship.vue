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
  name: 'relationship',
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    options() {
      return {
        title: {
          text: 'Nation Diversity',
          align: 'center',
          style: {
            fontSize: '16px',
          },
        },
        xaxis: {
          categories: [...new Set(this.items.map((item) => item.relationship))].sort((a, b) => a.localeCompare(b)),
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
        { name: 'Relationship', data: [0, 0, 0] },
      ],
    };
  },
  created() {
    this.generateSeries(this.items);
  },
  methods: {
    generateSeries(data) {
      data.forEach((item) => {
        if (item.relationship === 'Married') this.series[0].data[0] += 1;
        else if (item.relationship === 'N/A') this.series[0].data[1] += 1;
        else this.series[0].data[2] += 1;
      });
    },
  },
};
</script>

<style scoped>

</style>
