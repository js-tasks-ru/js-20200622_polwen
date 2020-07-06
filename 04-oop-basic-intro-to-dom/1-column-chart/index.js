export default class ColumnChart {
  constructor({ data = [], value = '', link = '', label = '' } = {}) {
    this.data = data;
    this.value = value;
    this.link = link;
    this.label = label;

    this.element = null;
    this.chartHeight = 50;

    this.render();
  }

  render() {
    this.element = document.createElement('div');

    if (!this.data.length) {
      this.element.classList.add('column-chart_loading');
    }

    this.element.innerHTML = `
      <div class="column-chart">

        <div class="column-chart__title">
          ${this.label}
          <a href=${this.link} class="column-chart__link">View all</a>
        </div>

        <div class="column-chart__container">
          <div class="column-chart__header">${this.value}</div>
          <div class="column-chart__chart">${this.renderColumns(this.data)}</div>
        </div>

      </div>
    `
  }

  renderColumns(data) {
    const { max, scale } = this.setScale(data);
    return data.map((number) => {
      const { currentValue, percents } = this.getValues(number, scale, max);
      return `<div style="--value:${currentValue}" data-tooltip="${percents}%"></div>`;
    }).join('');
  }

  setScale(data) {
    const max = Math.max(...data);
    const scale = this.chartHeight / max;
    return { max, scale };
  }

  getValues(number, scale, max) {
    const currentValue = Math.trunc(number * scale);
    const percents = ((number / max) * 100).toFixed(0);
    return { currentValue, percents }
  }

  update({ bodyData }) {
    this.element.querySelector('.column-chart__chart').innerHTML = this.renderColumns(bodyData);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

}
