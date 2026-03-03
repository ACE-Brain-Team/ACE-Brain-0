// =========================
// Chart Data
// Table 2–5: 4 domains, each with 5–6 bar charts
// =========================

const chartData = {
  "spatial-intelligence": {
    models: [
      { name: "VSI", yAxis: { min: 10, max: 68 }, metrics: [
        { label: "ACE-Brain-8B", value: 63.3 },
        { label: "RoboBrain2.0-7B", value: 36.1 },
        { label: "RoboBrain2.5-8B", value: 41.0 },
        { label: "VeBrain-7B", value: 39.9 },
        { label: "Vlaser-8B", value: 60.3 },
      ]},
      { name: "MMSI", yAxis: { min: 10, max: 35 }, metrics: [
        { label: "ACE-Brain-8B", value: 32.2 },
        { label: "RoboBrain2.0-7B", value: 27.9 },
        { label: "RoboBrain2.5-8B", value: 29.3 },
        { label: "VeBrain-7B", value: 27.3 },
        { label: "Vlaser-8B", value: 27.2 },
      ]},
      { name: "BLINK", yAxis: { min: 60, max: 90 }, metrics: [
        { label: "ACE-Brain-8B", value: 83.9 },
        { label: "RoboBrain2.0-7B", value: 81.4 },
        { label: "RoboBrain2.5-8B", value: 84.3 },
        { label: "VeBrain-7B", value: 79.7 },
        { label: "Vlaser-8B", value: 84.9 },
      ]},
      { name: "SITE", yAxis: { min: 40, max: 60 }, metrics: [
        { label: "ACE-Brain-8B", value: 53.1 },
        { label: "RoboBrain2.0-7B", value: 49.2 },
        { label: "RoboBrain2.5-8B", value: 52.6 },
        { label: "VeBrain-7B", value: 51.4 },
        { label: "Vlaser-8B", value: 47.5 },
      ]},
      { name: "SAT", yAxis: { min: 30, max: 100 }, metrics: [
        { label: "ACE-Brain-8B", value: 92.0 },
        { label: "RoboBrain2.0-7B", value: 75.3 },
        { label: "RoboBrain2.5-8B", value: 63.3 },
        { label: "VeBrain-7B", value: 73.3 },
        { label: "Vlaser-8B", value: 66.7 },
      ]},
      { name: "Mindcube", yAxis: { min: 0, max: 85 }, metrics: [
        { label: "ACE-Brain-8B", value: 82.1 },
        { label: "RoboBrain2.0-7B", value: 31.2 },
        { label: "RoboBrain2.5-8B", value: 28.1 },
        { label: "VeBrain-7B", value: 30.1 },
        { label: "Vlaser-8B", value: 34.6 },
      ]},
    ],
  },

  "embodied-intelligence": {
    models: [
      { name: "MME-RealWorld", yAxis: { min: 10, max: 72 }, metrics: [
        { label: "ACE-Brain-8B", value: 71.2 },
        { label: "RoboBrain2.0-7B", value: 59.6 },
        { label: "RoboBrain2.5-8B", value: 60.0 },
        { label: "VeBrain-7B", value: 60.1 },
        { label: "Vlaser-8B", value: 41.6 },
      ]},
      { name: "MAPLM", metrics: [
        { label: "ACE-Brain-8B", value: 77.8 },
        { label: "RoboBrain2.0-7B", value: 31.7 },
        { label: "RoboBrain2.5-8B", value: 22.5 },
        { label: "VeBrain-7B", value: 22.9 },
        { label: "Vlaser-8B", value: 29.1 },
      ]},
      { name: "DriveAction", yAxis: { min: 60, max: 82 }, metrics: [
        { label: "ACE-Brain-8B", value: 81.3 },
        { label: "RoboBrain2.0-7B", value: 80.9 },
        { label: "RoboBrain2.5-8B", value: 80.5 },
        { label: "VeBrain-7B", value: 78.3 },
        { label: "Vlaser-8B", value: 78.1 },
      ]},
      { name: "NuscenesQA", yAxis: { min: 0, max: 60 }, metrics: [
        { label: "ACE-Brain-8B", value: 58.8 },
        { label: "RoboBrain2.0-7B", value: 32.3 },
        { label: "RoboBrain2.5-8B", value: 33.2 },
        { label: "VeBrain-7B", value: 29.3 },
        { label: "Vlaser-8B", value: 33.1 },
      ]},
      { name: "NuPlanQA", yAxis: { min: 60, max: 92 }, metrics: [
        { label: "ACE-Brain-8B", value: 91.7 },
        { label: "RoboBrain2.0-7B", value: 82.8 },
        { label: "RoboBrain2.5-8B", value: 79.3 },
        { label: "VeBrain-7B", value: 82.9 },
        { label: "Vlaser-8B", value: 78.3 },
      ]},
      { name: "LingoQA", metrics: [
        { label: "ACE-Brain-8B", value: 65.8 },
        { label: "RoboBrain2.0-7B", value: 39.2 },
        { label: "RoboBrain2.5-8B", value: 48.0 },
        { label: "VeBrain-7B", value: 55.0 },
        { label: "Vlaser-8B", value: 59.6 },
      ]},
    ],
  },

  "autonomous-driving": {
    models: [
      { name: "UrbanVideo-Bench", metrics: [
        { label: "ACE-Brain-8B", value: 56.9 },
        { label: "RoboBrain2.0-7B", value: 45.2 },
        { label: "RoboBrain2.5-8B", value: 42.8 },
        { label: "VeBrain-7B", value: 44.1 },
        { label: "Vlaser-8B", value: 41.3 },
      ]},
      { name: "AircopBench", metrics: [
        { label: "ACE-Brain-8B", value: 70.3 },
        { label: "RoboBrain2.0-7B", value: 58.4 },
        { label: "RoboBrain2.5-8B", value: 55.6 },
        { label: "VeBrain-7B", value: 57.2 },
        { label: "Vlaser-8B", value: 52.1 },
      ]},
      { name: "Avi-Math", metrics: [
        { label: "ACE-Brain-8B", value: 35.0 },
        { label: "RoboBrain2.0-7B", value: 28.4 },
        { label: "RoboBrain2.5-8B", value: 26.2 },
        { label: "VeBrain-7B", value: 27.8 },
        { label: "Vlaser-8B", value: 24.5 },
      ]},
      { name: "Airspatial-VQA", metrics: [
        { label: "ACE-Brain-8B", value: 258.0 },
        { label: "RoboBrain2.0-7B", value: 218.5 },
        { label: "RoboBrain2.5-8B", value: 205.2 },
        { label: "VeBrain-7B", value: 212.0 },
        { label: "Vlaser-8B", value: 198.6 },
      ]},
      { name: "HRVQA", metrics: [
        { label: "ACE-Brain-8B", value: 61.2 },
        { label: "RoboBrain2.0-7B", value: 52.3 },
        { label: "RoboBrain2.5-8B", value: 49.8 },
        { label: "VeBrain-7B", value: 51.4 },
        { label: "Vlaser-8B", value: 47.6 },
      ]},
    ],
  },

  "low-altitude-intelligence": {
    models: [
      { name: "ERQA", metrics: [
        { label: "ACE-Brain-8B", value: 41.5 },
        { label: "RoboBrain2.0-7B", value: 42.5 },
        { label: "RoboBrain2.5-8B", value: 44.3 },
        { label: "VeBrain-7B", value: 40.3 },
        { label: "Vlaser-8B", value: 41.0 },
      ]},
      { name: "RoboVQA", metrics: [
        { label: "ACE-Brain-8B", value: 64.6 },
        { label: "RoboBrain2.0-7B", value: 6.58 },
        { label: "RoboBrain2.5-8B", value: 18.7 },
        { label: "VeBrain-7B", value: 24.7 },
        { label: "Vlaser-8B", value: 7.94 },
      ]},
      { name: "OpenEQA", metrics: [
        { label: "ACE-Brain-8B", value: 70.0 },
        { label: "RoboBrain2.0-7B", value: 60.0 },
        { label: "RoboBrain2.5-8B", value: 62.6 },
        { label: "VeBrain-7B", value: 63.8 },
        { label: "Vlaser-8B", value: 56.3 },
      ]},
      { name: "EmbSpatial", metrics: [
        { label: "ACE-Brain-8B", value: 77.3 },
        { label: "RoboBrain2.0-7B", value: 76.3 },
        { label: "RoboBrain2.5-8B", value: 75.6 },
        { label: "VeBrain-7B", value: 70.5 },
        { label: "Vlaser-8B", value: 75.3 },
      ]},
      { name: "Ego-Plan2", metrics: [
        { label: "ACE-Brain-8B", value: 55.3 },
        { label: "RoboBrain2.0-7B", value: 33.2 },
        { label: "RoboBrain2.5-8B", value: 44.9 },
        { label: "VeBrain-7B", value: 27.3 },
        { label: "Vlaser-8B", value: 53.4 },
      ]},
      { name: "EB-Habitat", metrics: [
        { label: "ACE-Brain-8B", value: 42.3 },
        { label: "RoboBrain2.0-7B", value: 29.3 },
        { label: "RoboBrain2.5-8B", value: 26.3 },
        { label: "VeBrain-7B", value: 15.0 },
        { label: "Vlaser-8B", value: 40.0 },
      ]},
    ],
  },
};

// =========== Chart Rendering ===========

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function ensureChartsGrid(groupEl) {
    let grid = groupEl.querySelector('.charts-grid');
    if (!grid) {
        grid = document.createElement('div');
        grid.className = 'charts-grid';
        groupEl.appendChild(grid);
    }
    return grid;
}

function createBar(metric) {
    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';

    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = '0px';
    bar.dataset.value = String(metric.value);

    const val = document.createElement('div');
    val.className = 'bar-value';
    val.textContent = String(metric.value);

    const lab = document.createElement('div');
    lab.className = 'bar-label';
    lab.textContent = metric.label;

    barContainer.appendChild(bar);
    barContainer.appendChild(val);
    barContainer.appendChild(lab);
    return barContainer;
}

function getModelScale(model) {
    if (model && model.yAxis && Number.isFinite(model.yAxis.min) && Number.isFinite(model.yAxis.max) && model.yAxis.max > model.yAxis.min) {
        return { min: model.yAxis.min, max: model.yAxis.max };
    }
    const values = (model.metrics || []).map(m => Number(m.value)).filter(v => Number.isFinite(v));
    if (!values.length) return { min: 0, max: 1 };
    const dataMin = Math.min(...values);
    const dataMax = Math.max(...values);
    if (dataMax === dataMin) return { min: Math.min(0, dataMin), max: dataMax + 1 };
    const padding = (dataMax - dataMin) * 0.1;
    return { min: Math.max(0, dataMin - padding), max: dataMax + padding };
}

function createSingleChart(model) {
    const chart = document.createElement('div');
    chart.className = 'single-chart';

    const h4 = document.createElement('h4');
    h4.className = 'title is-5';
    h4.textContent = model.name;

    const row = document.createElement('div');
    row.className = 'chart-row';

    const scale = getModelScale(model);
    model.metrics.forEach(m => {
        const barEl = createBar(m);
        const bar = barEl.querySelector('.bar');
        if (bar) {
            bar.dataset.yMin = String(scale.min);
            bar.dataset.yMax = String(scale.max);
        }
        row.appendChild(barEl);
    });

    chart.appendChild(h4);
    chart.appendChild(row);
    return chart;
}

function renderGroup(groupId) {
    const groupEl = document.getElementById(groupId);
    if (!groupEl) return;

    const grid = ensureChartsGrid(groupEl);
    if (grid.dataset.rendered === '1') return;

    const models = chartData[groupId]?.models || [];
    const modelNames = (models[0]?.metrics || []).map(m => m.label);

    const legendEl = document.createElement('div');
    legendEl.className = 'chart-legend';
    modelNames.forEach(name => {
        const item = document.createElement('span');
        item.className = 'legend-item';
        item.innerHTML = '<span class="legend-color"></span><span class="legend-label">' + escapeHtml(name) + '</span>';
        legendEl.appendChild(item);
    });
    groupEl.insertBefore(legendEl, grid);

    grid.innerHTML = '';
    models.forEach(model => grid.appendChild(createSingleChart(model)));
    grid.dataset.rendered = '1';
}

function animateGroupBars(groupEl) {
    if (!groupEl) return;
    const bars = groupEl.querySelectorAll('.bar');
    if (!bars.length) return;

    const maxHeight = 110;
    bars.forEach(b => { b.style.height = '0px'; b.classList.remove('animate'); });
    void groupEl.offsetWidth;

    bars.forEach((bar, index) => {
        const value = parseFloat(bar.dataset.value || '0');
        const yMin  = parseFloat(bar.dataset.yMin  || '0');
        const yMax  = parseFloat(bar.dataset.yMax  || '100');
        const range = yMax - yMin;
        const normalized = range > 0 ? (value - yMin) / range : 0;
        const height = Math.max(0, Math.min(1, normalized)) * maxHeight;

        setTimeout(() => {
            bar.style.height = height + 'px';
            bar.classList.add('animate');
            const valueDisplay = bar.nextElementSibling;
            if (valueDisplay?.classList.contains('bar-value')) {
                valueDisplay.textContent = String(value);
            }
        }, 50 * index);
    });
}

function activateGroup(groupId) {
    document.querySelectorAll('.chart-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.chart === groupId));
    document.querySelectorAll('.chart-group').forEach(group =>
        group.classList.toggle('active', group.id === groupId));

    renderGroup(groupId);
    animateGroupBars(document.getElementById(groupId));
}

function initCharts() {
    document.querySelectorAll('.chart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const groupId = button.getAttribute('data-chart');
            if (groupId) activateGroup(groupId);
        });
    });

    const chartGroups = document.querySelectorAll('.chart-group');
    const initial =
        document.querySelector('.chart-btn.active')?.dataset.chart ||
        (chartGroups[0] ? chartGroups[0].id : null);

    if (initial) activateGroup(initial);
}

// Trigger bar animation when section scrolls into view
const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeGroup = entry.target.querySelector('.chart-group.active');
            if (activeGroup) {
                renderGroup(activeGroup.id);
                animateGroupBars(activeGroup);
            }
            chartObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initCharts();
        const chartSection = document.getElementById('intelligence-viz');
        if (chartSection) chartObserver.observe(chartSection);
    });
} else {
    initCharts();
    const chartSection = document.getElementById('intelligence-viz');
    if (chartSection) chartObserver.observe(chartSection);
}
