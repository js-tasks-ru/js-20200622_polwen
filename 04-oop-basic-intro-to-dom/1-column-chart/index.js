export default class ColumnChart {
  // element = null; // тесты ругаются если объявляю здесь
  // chartHeight = 50

  constructor({ data = [], value = '', link = '', label = '' } = {}) {
    this.data = data;
    this.value = value;
    this.link = link;
    this.label = label;

    // объявил здесь
    this.element = null;
    this.chartHeight = 50;

    this.render();
  }

  render() {
    this.element = document.createElement('div');
    // this.element.setAttribute('style', '--chart-height: 50');

    if (this.data.length === 0) {
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
    this.setScale();
    return data.map((number) => {
      const { currentValue, percents } = this.getValues(number, this.scale, this.max);
      return `<div style="--value:${currentValue}" data-tooltip="${percents}%"></div>`;
    }).join('');
  }

  setScale() {
    this.max = Math.max(...this.data);
    this.scale = this.chartHeight / this.max;
  }

  getValues(number, scale, max) {
    const currentValue = Math.trunc(number * scale);
    const percents = ((number / max) * 100).toFixed(0);
    return { currentValue, percents }
  }

  update({ bodyData }) {
    this.render();
    // почему-то если перерендериривать не весь компонент, а только часть, то работает не очень. Выдает 100 вместо 50. Не понимаю :(
    // this.element.querySelector('.column-chart__chart').innerHTML = this.renderColumns(bodyData);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

}
