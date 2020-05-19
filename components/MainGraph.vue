<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        datasets: [
          {
            label: "Confirmed",
            data: this.$store.getters.getGraphConfirmed,
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(1, 116, 188, 1)"
          },
          {
            label: "Deaths",
            data: this.$store.getters.getGraphDeaths,
            backgroundColor: "transparent",
            borderColor: "rgba(255,0, 87, 0.50)",
            pointBackgroundColor: "rgba(255,0, 87, 1)"
          },
          {
            label: "Recovered",
            data: this.$store.getters.getGraphRecovered,
            backgroundColor: "transparent",
            borderColor: "rgba(0, 156, 139, 0.50)",
            pointBackgroundColor: "rgba(0, 156, 139, 1)"
          },
          {
            label: "Active",
            data: this.$store.getters.getGraphActive,
            backgroundColor: "transparent",
            borderColor: "rgba(255, 0, 172, 0.50)",
            pointBackgroundColor: "rgba(255, 0, 172, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Statistics"
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "month"
              }
            }
          ]
        }
      }
    );
  }
};
</script>
