window.HELP_IMPROVE_VIDEOJS = false;

// More Works Dropdown Functionality
function toggleMoreWorks() {
  const dropdown = document.getElementById('moreWorksDropdown');
  const button = document.querySelector('.more-works-btn');

  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
    button.classList.remove('active');
  } else {
    dropdown.classList.add('show');
    button.classList.add('active');
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  const container = document.querySelector('.more-works-container');
  const dropdown = document.getElementById('moreWorksDropdown');
  const button = document.querySelector('.more-works-btn');

  if (container && !container.contains(event.target)) {
    dropdown.classList.remove('show');
    button.classList.remove('active');
  }
});

// Close dropdown on escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');
    dropdown.classList.remove('show');
    button.classList.remove('active');
  }
});

// Copy BibTeX to clipboard
function copyBibTeX() {
  const bibtexElement = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');
  const copyText = button.querySelector('.copy-text');

  if (bibtexElement) {
    navigator.clipboard.writeText(bibtexElement.textContent).then(function () {
      // Success feedback
      button.classList.add('copied');
      copyText.textContent = 'Cop';

      setTimeout(function () {
        button.classList.remove('copied');
        copyText.textContent = 'Copy';
      }, 2000);
    }).catch(function (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = bibtexElement.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      button.classList.add('copied');
      copyText.textContent = 'Cop';
      setTimeout(function () {
        button.classList.remove('copied');
        copyText.textContent = 'Copy';
      }, 2000);
    });
  }
}

// Scroll to top functionality
// Scroll to top functionality is removed since button is replaced with navbar
// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// }

// Toggle navbar menu
function toggleNavbarMenu() {
  const navbarMenu = document.getElementById('navbar-menu');
  const navbarBurger = document.querySelector('.navbar-burger');

  navbarMenu.classList.toggle('is-active');
  navbarBurger.classList.toggle('is-active');
}

// Handle smooth scrolling for anchor links in navbar
function setupSmoothScrolling() {
  const navbarItems = document.querySelectorAll('.navbar-item[href^="#"]');

  navbarItems.forEach(item => {
    item.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Highlight active navigation item based on scroll position
function highlightActiveNav() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.navbar-item[href^="#"]');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');

    // Adjust for navbar height
    if (pageYOffset >= sectionTop - 85 && pageYOffset < sectionTop + sectionHeight) {
      currentSection = sectionId;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('is-active');

    const href = link.getAttribute('href').substring(1); // Remove '#' from href

    if (href === currentSection) {
      link.classList.add('is-active');
    }
  });
}

// Add scroll event listener for highlighting active navigation item
window.addEventListener('scroll', highlightActiveNav);

// Initialize chart functionality
// =========================
// ACE Brains paper: Table 2–5 → 4 domains, each with 6 bar charts.
// Each chart has a title (name) and 5 bars (metrics: label + value).
// Replace the placeholder names/values below with your paper’s Table 2–5 data.
// =========================

const chartData = {
  // Table 2 — Spatial: 6 benchmarks × 5 models (ACE-Brain-8B 最左, then RoboBrain2.0-7B, RoboBrain2.5-8B, VeBrain-7B, Vlaser-8B)
  "spatial-intelligence": {
    models: [
      {
        name: "VSI", yAxis: { min: 10, max: 68 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 63.3 },
          { label: "RoboBrain2.0-7B", value: 36.1 },
          { label: "RoboBrain2.5-8B", value: 41.0 },
          { label: "VeBrain-7B", value: 39.9 },
          { label: "Vlaser-8B", value: 60.3 },
          { label: "Pelican-VL", value: 52.8 },
          { label: "MiMo-Embodied", value: 48.5 },
        ]
      },
      {
        name: "MMSI", yAxis: { min: 10, max: 35 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 32.2 },
          { label: "RoboBrain2.0-7B", value: 27.9 },
          { label: "RoboBrain2.5-8B", value: 29.3 },
          { label: "VeBrain-7B", value: 27.3 },
          { label: "Vlaser-8B", value: 27.2 },
          { label: "Pelican-VL", value: 26.0 },
          { label: "MiMo-Embodied", value: 31.7 },
        ]
      },
      {
        name: "BLINK", yAxis: { min: 50, max: 90 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 83.9 },
          { label: "RoboBrain2.0-7B", value: 81.4 },
          { label: "RoboBrain2.5-8B", value: 84.3 },
          { label: "VeBrain-7B", value: 79.7 },
          { label: "Vlaser-8B", value: 84.9 },
          { label: "Pelican-VL", value: 56.8 },
          { label: "MiMo-Embodied", value: 0.0 },
        ]
      },
      {
        name: "SITE", yAxis: { min: 40, max: 60 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 53.1 },
          { label: "RoboBrain2.0-7B", value: 49.2 },
          { label: "RoboBrain2.5-8B", value: 52.6 },
          { label: "VeBrain-7B", value: 51.4 },
          { label: "Vlaser-8B", value: 47.5 },
          { label: "Pelican-VL", value: 52.3 },
          { label: "MiMo-Embodied", value: 44.8 },
        ]
      },
      {
        name: "SAT", yAxis: { min: 30, max: 100 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 92.0 },
          { label: "RoboBrain2.0-7B", value: 75.3 },
          { label: "RoboBrain2.5-8B", value: 63.3 },
          { label: "VeBrain-7B", value: 73.3 },
          { label: "Vlaser-8B", value: 66.7 },
          { label: "Pelican-VL", value: 67.3 },
          { label: "MiMo-Embodied", value: 78.7 },
        ]
      },
      {
        name: "Mindcube", yAxis: { min: 0, max: 85 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 82.1 },
          { label: "RoboBrain2.0-7B", value: 31.2 },
          { label: "RoboBrain2.5-8B", value: 28.1 },
          { label: "VeBrain-7B", value: 30.1 },
          { label: "Vlaser-8B", value: 34.6 },
          { label: "Pelican-VL", value: 31.0 },
          { label: "MiMo-Embodied", value: 32.3 },
        ]
      },
    ],
  },

  // Table 3 = Paper Table 3 — Autonomous Driving: 6 benchmarks × 5 models, ACE-Brain-8B 最左
  "embodied-intelligence": {
    models: [
      {
        name: "MME-RealWorld", yAxis: { min: 10, max: 72 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 71.2 },
          { label: "RoboBrain2.0-7B", value: 59.6 },
          { label: "RoboBrain2.5-8B", value: 60.0 },
          { label: "VeBrain-7B", value: 60.1 },
          { label: "Vlaser-8B", value: 41.6 },
          { label: "Pelican-VL", value: 57.9 },
          { label: "MiMo-Embodied", value: 60.3 },
        ]
      },
      {
        name: "MAPLM", metrics: [
          { label: "ACE-Brain-0-8B", value: 77.8 },
          { label: "RoboBrain2.0-7B", value: 31.7 },
          { label: "RoboBrain2.5-8B", value: 22.5 },
          { label: "VeBrain-7B", value: 22.9 },
          { label: "Vlaser-8B", value: 29.1 },
          { label: "Pelican-VL", value: 24.9 },
          { label: "MiMo-Embodied", value: 74.5 },
        ]
      },
      {
        name: "DriveAction", yAxis: { min: 60, max: 82 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 81.3 },
          { label: "RoboBrain2.0-7B", value: 80.9 },
          { label: "RoboBrain2.5-8B", value: 80.5 },
          { label: "VeBrain-7B", value: 78.3 },
          { label: "Vlaser-8B", value: 78.1 },
          { label: "Pelican-VL", value: 77.2 },
          { label: "MiMo-Embodied", value: 81.0 },
        ]
      },
      {
        name: "NuscenesQA", yAxis: { min: 0, max: 60 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 58.8 },
          { label: "RoboBrain2.0-7B", value: 32.3 },
          { label: "RoboBrain2.5-8B", value: 33.2 },
          { label: "VeBrain-7B", value: 29.3 },
          { label: "Vlaser-8B", value: 33.1 },
          { label: "Pelican-VL", value: 14.8 },
          { label: "MiMo-Embodied", value: 56.7 },
        ]
      },
      {
        name: "NuPlanQA", yAxis: { min: 60, max: 92 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 91.7 },
          { label: "RoboBrain2.0-7B", value: 82.8 },
          { label: "RoboBrain2.5-8B", value: 79.3 },
          { label: "VeBrain-7B", value: 82.9 },
          { label: "Vlaser-8B", value: 78.3 },
          { label: "Pelican-VL", value: 83.4 },
          { label: "MiMo-Embodied", value: 73.7 },
        ]
      },
      {
        name: "LingoQA", metrics: [
          { label: "ACE-Brain-0-8B", value: 65.8 },
          { label: "RoboBrain2.0-7B", value: 39.2 },
          { label: "RoboBrain2.5-8B", value: 48.0 },
          { label: "VeBrain-7B", value: 55.0 },
          { label: "Vlaser-8B", value: 59.6 },
          { label: "Pelican-VL", value: 56.0 },
          { label: "MiMo-Embodied", value: 69.9 },
        ]
      },
    ],
  },

  // Table 4 — Low-altitude (Paper Table 4): 5 benchmarks × 5 models, ACE-Brain-8B 最左
  "autonomous-driving": {
    models: [
      {
        name: "UrbanVideo-Bench", metrics: [
          { label: "ACE-Brain-0-8B", value: 56.9 },
          { label: "RoboBrain2.0-7B", value: 45.2 },
          { label: "RoboBrain2.5-8B", value: 42.8 },
          { label: "VeBrain-7B", value: 44.1 },
          { label: "Vlaser-8B", value: 41.3 },
          { label: "Pelican-VL", value: 37.1 },
          { label: "MiMo-Embodied", value: 26.0 },
        ]
      },
      {
        name: "AircopBench", metrics: [
          { label: "ACE-Brain-0-8B", value: 70.3 },
          { label: "RoboBrain2.0-7B", value: 58.4 },
          { label: "RoboBrain2.5-8B", value: 55.6 },
          { label: "VeBrain-7B", value: 57.2 },
          { label: "Vlaser-8B", value: 52.1 },
          { label: "Pelican-VL", value: 50.8 },
          { label: "MiMo-Embodied", value: 50.2 },
        ]
      },
      {
        name: "Avi-Math", metrics: [
          { label: "ACE-Brain-0-8B", value: 35.0 },
          { label: "RoboBrain2.0-7B", value: 28.4 },
          { label: "RoboBrain2.5-8B", value: 26.2 },
          { label: "VeBrain-7B", value: 27.8 },
          { label: "Vlaser-8B", value: 24.5 },
          { label: "Pelican-VL", value: 22.5 },
          { label: "MiMo-Embodied", value: 33.7 },
        ]
      },
      {
        name: "Airspatial-VQA ↓", metrics: [
          { label: "ACE-Brain-0-8B", value: 258.0 },
          { label: "RoboBrain2.0-7B", value: 764.4 },
          { label: "RoboBrain2.5-8B", value: 1509.3 },
          { label: "VeBrain-7B", value: 1583.4 },
          { label: "Vlaser-8B", value: 1597.7 },
          { label: "Pelican-VL", value: 1586.6 },
          { label: "MiMo-Embodied", value: 289.4 },
        ]
      },
      {
        name: "HRVQA", metrics: [
          { label: "ACE-Brain-0-8B", value: 61.2 },
          { label: "RoboBrain2.0-7B", value: 52.3 },
          { label: "RoboBrain2.5-8B", value: 49.8 },
          { label: "VeBrain-7B", value: 51.4 },
          { label: "Vlaser-8B", value: 47.6 },
          { label: "Pelican-VL", value: 38.6 },
          { label: "MiMo-Embodied", value: 22.2 },
        ]
      },
    ],
  },

  // Table 5 = Paper Table 5 — Embodied: 6 benchmarks × 5 models, ACE-Brain-8B 最左
  "low-altitude-intelligence": {
    models: [
      {
        name: "ERQA", yAxis: { min: 35, max: 47 }, metrics: [
          { label: "ACE-Brain-0-8B", value: 41.5 },
          { label: "RoboBrain2.0-7B", value: 42.5 },
          { label: "RoboBrain2.5-8B", value: 44.3 },
          { label: "VeBrain-7B", value: 40.3 },
          { label: "Vlaser-8B", value: 41.0 },
          { label: "Pelican-VL", value: 39.8 },
          { label: "MiMo-Embodied", value: 46.8 },
        ]
      },
      {
        name: "RoboVQA", metrics: [
          { label: "ACE-Brain-0-8B", value: 64.6 },
          { label: "RoboBrain2.0-7B", value: 6.58 },
          { label: "RoboBrain2.5-8B", value: 18.7 },
          { label: "VeBrain-7B", value: 24.7 },
          { label: "Vlaser-8B", value: 7.94 },
          { label: "Pelican-VL", value: 28.1 },
          { label: "MiMo-Embodied", value: 0.9 },
        ]
      },
      {
        name: "OpenEQA", metrics: [
          { label: "ACE-Brain-0-8B", value: 70.0 },
          { label: "RoboBrain2.0-7B", value: 60.0 },
          { label: "RoboBrain2.5-8B", value: 62.6 },
          { label: "VeBrain-7B", value: 63.8 },
          { label: "Vlaser-8B", value: 56.3 },
          { label: "Pelican-VL", value: 63.3 },
          { label: "MiMo-Embodied", value: 74.1 },
        ]
      },
      {
        name: "EmbSpatial", metrics: [
          { label: "ACE-Brain-0-8B", value: 77.3 },
          { label: "RoboBrain2.0-7B", value: 76.3 },
          { label: "RoboBrain2.5-8B", value: 75.6 },
          { label: "VeBrain-7B", value: 70.5 },
          { label: "Vlaser-8B", value: 75.3 },
          { label: "Pelican-VL", value: 73.2 },
          { label: "MiMo-Embodied", value: 76.2 },
        ]
      },
      {
        name: "Ego-Plan2", metrics: [
          { label: "ACE-Brain-0-8B", value: 55.3 },
          { label: "RoboBrain2.0-7B", value: 33.2 },
          { label: "RoboBrain2.5-8B", value: 44.9 },
          { label: "VeBrain-7B", value: 27.3 },
          { label: "Vlaser-8B", value: 53.4 },
          { label: "Pelican-VL", value: 39.4 },
          { label: "MiMo-Embodied", value: 43.0 },
        ]
      },
      {
        name: "EB-Habitat", metrics: [
          { label: "ACE-Brain-0-8B", value: 42.3 },
          { label: "RoboBrain2.0-7B", value: 29.3 },
          { label: "RoboBrain2.5-8B", value: 26.3 },
          { label: "VeBrain-7B", value: 15.0 },
          { label: "Vlaser-8B", value: 40.0 },
          { label: "Pelican-VL", value: 16.3 },
          { label: "MiMo-Embodied", value: 16.7 },
        ]
      },
    ],
  },
};

function ensureChartsGrid(groupEl) {
  // 你如果已经在 HTML 里放了 .charts-grid，这里会直接复用
  // 如果你没放，这里会自动创建一个，不会报错
  let grid = groupEl.querySelector('.charts-grid');
  if (!grid) {
    grid = document.createElement('div');
    grid.className = 'charts-grid';
    groupEl.appendChild(grid);
  }
  return grid;
}

function createBar(metric) {
  const barContainer = document.createElement("div");
  barContainer.className = "bar-container";

  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.height = "0px";
  bar.dataset.value = String(metric.value);

  const val = document.createElement("div");
  val.className = "bar-value";
  val.textContent = String(metric.value);

  const lab = document.createElement("div");
  lab.className = "bar-label";
  lab.textContent = metric.label;

  barContainer.appendChild(bar);
  barContainer.appendChild(val);
  barContainer.appendChild(lab);
  return barContainer;
}

function getModelScale(model) {
  // 优先使用手动配置；未配置时按当前图的数据自动计算范围
  if (model && model.yAxis && Number.isFinite(model.yAxis.min) && Number.isFinite(model.yAxis.max) && model.yAxis.max > model.yAxis.min) {
    return { min: model.yAxis.min, max: model.yAxis.max };
  }

  const values = (model.metrics || [])
    .map(m => Number(m.value))
    .filter(v => Number.isFinite(v));

  if (!values.length) return { min: 0, max: 1 };

  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);

  if (dataMax === dataMin) {
    return { min: Math.min(0, dataMin), max: dataMax + 1 };
  }

  const padding = (dataMax - dataMin) * 0.1;
  const min = Math.max(0, dataMin - padding);
  const max = dataMax + padding;
  return { min, max };
}

function createSingleChart(model) {
  const chart = document.createElement("div");
  chart.className = "single-chart";

  const h4 = document.createElement("h4");
  h4.className = "title is-5";
  h4.textContent = model.name;

  const row = document.createElement("div");
  row.className = "chart-row";

  const scale = getModelScale(model);

  const lowerIsBetter = !!model.lowerIsBetter;
  model.metrics.forEach(m => {
    const barEl = createBar(m);
    const bar = barEl.querySelector(".bar");
    if (bar) {
      bar.dataset.yMin = String(scale.min);
      bar.dataset.yMax = String(scale.max);
      if (lowerIsBetter) bar.dataset.lowerIsBetter = "1";
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

  if (grid.dataset.rendered === "1") return;

  const models = chartData[groupId]?.models || [];
  const modelNames = (models[0] && models[0].metrics) ? models[0].metrics.map(m => m.label) : [];

  // 颜色图例：与柱子顺序一致，放在图表上方
  const legendEl = document.createElement("div");
  legendEl.className = "chart-legend";
  modelNames.forEach(name => {
    const item = document.createElement("span");
    item.className = "legend-item";
    item.innerHTML = "<span class=\"legend-color\"></span><span class=\"legend-label\">" + escapeHtml(name) + "</span>";
    legendEl.appendChild(item);
  });
  groupEl.insertBefore(legendEl, grid);

  grid.innerHTML = "";
  models.forEach(model => grid.appendChild(createSingleChart(model)));
  grid.dataset.rendered = "1";
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function animateGroupBars(groupEl) {
  if (!groupEl) return;

  const bars = groupEl.querySelectorAll(".bar");
  if (!bars.length) return;

  // 更新高度以匹配新的 CSS (chart-row height: 140px, 减去 padding 和 label/value 空间)
  const maxHeight = 110;

  // reset
  bars.forEach(b => {
    b.style.height = "0px";
    b.classList.remove("animate");
  });

  // reflow
  void groupEl.offsetWidth;

  // animate stagger with smoother timing (value can be float, e.g. 36.1)
  bars.forEach((bar, index) => {
    const value = parseFloat(bar.dataset.value || "0", 10);
    const yMin = parseFloat(bar.dataset.yMin || "0", 10);
    const yMax = parseFloat(bar.dataset.yMax || "100", 10);
    const range = yMax - yMin;
    const lowerIsBetter = bar.dataset.lowerIsBetter === "1";
    let normalized;
    if (lowerIsBetter) {
      // 越低越好：值越小柱子越高
      normalized = range > 0 ? (yMax - value) / range : 0;
    } else {
      normalized = range > 0 ? (value - yMin) / range : 0;
    }
    const calculatedHeight = Math.max(0, Math.min(1, normalized)) * maxHeight;

    setTimeout(() => {
      bar.style.height = calculatedHeight + "px";
      bar.classList.add("animate");

      const valueDisplay = bar.nextElementSibling;
      if (valueDisplay && valueDisplay.classList.contains("bar-value")) {
        valueDisplay.textContent = String(value);
      }
    }, 50 * index);
  });
}

function activateGroup(groupId) {
  const chartButtons = document.querySelectorAll(".chart-btn");
  const chartGroups = document.querySelectorAll(".chart-group");

  // buttons active
  chartButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.chart === groupId));
  // groups active
  chartGroups.forEach(group => group.classList.toggle("active", group.id === groupId));

  // render + animate
  renderGroup(groupId);
  const groupEl = document.getElementById(groupId);
  animateGroupBars(groupEl);
}

// Initialize chart functionality
function initCharts() {
  const chartButtons = document.querySelectorAll(".chart-btn");
  const chartGroups = document.querySelectorAll(".chart-group");

  // click binding
  chartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const groupId = button.getAttribute("data-chart");
      if (groupId) activateGroup(groupId);
    });
  });

  // init first active
  const initial =
    document.querySelector(".chart-btn.active")?.dataset.chart ||
    (chartGroups[0] ? chartGroups[0].id : null);

  if (initial) activateGroup(initial);
}

// Observer：section 进视野时，只触发一次当前 active 的那组动画
const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeGroup = entry.target.querySelector(".chart-group.active");
      if (activeGroup) {
        // 确保已渲染
        renderGroup(activeGroup.id);
        animateGroupBars(activeGroup);
      }
      chartObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Initialize charts when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initCharts();
    const chartSection = document.getElementById("intelligence-viz");
    if (chartSection) chartObserver.observe(chartSection);
  });
} else {
  initCharts();
  const chartSection = document.getElementById("intelligence-viz");
  if (chartSection) chartObserver.observe(chartSection);
}


// Show/hide scroll to top button
// Note: This function is kept for compatibility but scroll-to-top button is removed
// window.addEventListener('scroll', function() {
//     const scrollButton = document.querySelector('.scroll-to-top');
//     if (window.pageYOffset > 300) {
//         if(scrollButton) scrollButton.classList.add('visible');
//     } else {
//         if(scrollButton) scrollButton.classList.remove('visible');
//     }
// });

// Video carousel autoplay when in view
function setupVideoCarouselAutoplay() {
  const carouselVideos = document.querySelectorAll('.results-carousel video');

  if (carouselVideos.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        // Video is in view, play it
        video.play().catch(e => {
          // Autoplay failed, probably due to browser policy
          console.log('Autoplay prevented:', e);
        });
      } else {
        // Video is out of view, pause it
        video.pause();
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the video is visible
  });

  carouselVideos.forEach(video => {
    observer.observe(video);
  });
}

$(document).ready(function () {
  // Check for click events on the navbar burger icon

  // Setup smooth scrolling for navbar anchor links
  setupSmoothScrolling();

  // Enhanced carousel options with improved transitions
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,  // Pause on hover
    draggable: true,    // Enable dragging
    swipe: true,        // Enable swipe on touch devices
    animation: 'slide', // Smooth slide transition
    perPage: 1,         // Slides per page
    perPageCustom: [[768, 1], [1024, 1]], // Responsive slides
    speed: 800,         // Animation speed
  }

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', options);

  bulmaSlider.attach();

  // Setup video autoplay for carousel
  setupVideoCarouselAutoplay();

  // Enhanced scroll animations
  const animatedElements = document.querySelectorAll('[data-animation]');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Enhanced video interaction
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    // Add play/pause event listeners
    video.addEventListener('play', function () {
      this.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
    });

    video.addEventListener('pause', function () {
      this.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
    });

    video.addEventListener('loadstart', function () {
      this.style.opacity = 0.7;
    });

    video.addEventListener('canplay', function () {
      this.style.opacity = 1;
    });
  });

  // Add keyboard navigation for carousel
  $(document).keydown(function (e) {
    if (carousels && carousels.length > 0) {
      switch (e.which) {
        case 37: // left
          carousels[0].previous();
          break;
        case 39: // right
          carousels[0].next();
          break;
        default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    }
  });

  // Add touch swipe support enhancement
  let startX = 0;
  let startY = 0;

  $('.carousel').on('touchstart', function (event) {
    const touch = event.originalEvent.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  });

  $('.carousel').on('touchmove', function (event) {
    if (!startX) return;

    const touch = event.originalEvent.touches[0];
    const diffX = startX - touch.clientX;
    const diffY = startY - touch.clientY;

    // Only handle horizontal swipes
    if (Math.abs(diffX) > Math.abs(diffY)) {
      event.preventDefault();
    }
  });
});
