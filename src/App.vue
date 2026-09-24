<template>
  <div class="app">
    <nav class="navbar">
      <div class="container">
        <a href="#" class="navbar-brand"><span class="brand-mark">W</span><span>WhiskHub</span></a>
        <ul class="navbar-links">
          <li><a href="#projects">项目索引</a></li>
          <li><a href="#about">关于实验室</a></li>
          <li><a href="https://github.com/KeyandBoy" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </nav>

    <main>
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <p class="eyebrow"><span class="eyebrow-dot"></span> PERSONAL DIGITAL LAB · 2026</p>
            <h1 class="hero-title">把好奇心，<em>做成可用的东西。</em></h1>
            <p class="hero-subtitle">A quiet collection of AI tools, web experiments and creative engineering projects.</p>
            <p class="hero-description">这里收纳了我正在开发和维护的 Web 应用、AI 工具、数据处理项目与创意实验。每一个项目都是一次把想法做成真实产品的尝试。</p>
            <div class="hero-actions">
              <a href="#projects" class="btn btn-primary">查看项目</a>
              <a href="https://github.com/KeyandBoy" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
            </div>
          </div>
          <div class="hero-orbit" aria-hidden="true">
            <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
            <div class="orbit-core"><span>W</span><small>LAB<br>INDEX</small></div>
          </div>
          <div class="hero-note"><span>01</span><span>Ideas in motion<br>since 2023</span></div>
        </div>
      </section>

      <section class="stats" aria-label="项目概览">
        <div class="container stats-grid">
          <div><strong>{{ onlineProjects.length + lockedProjects.length }}</strong><span>实验项目</span></div>
          <div><strong>{{ onlineProjects.length }}</strong><span>已上线</span></div>
          <div><strong>04</strong><span>探索方向</span></div>
          <div><strong>∞</strong><span>持续生长</span></div>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="container">
          <div class="section-heading">
            <div><p class="eyebrow">SELECTED WORKS</p><h2 class="section-title">项目索引</h2></div>
            <p class="section-intro">从一个念头开始，经过设计、试错与上线，最后在这里留下一个入口。</p>
          </div>

           <h3 class="section-subtitle"><span>01</span> Online Projects <small>已上线项目</small></h3>
          <div class="card-grid">
             <div v-for="(project, index) in onlineProjects" :key="project.name" class="card" :style="{ '--delay': `${index * 80}ms` }">
              <div class="card-header">
                <div>
                  <div class="card-name">{{ project.name }}</div>
                  <div class="card-english">{{ project.english }}</div>
                </div>
                 <span class="status-badge status-online"><i></i> Online</span>
              </div>
              <div class="card-tags">
                <span v-for="tag in project.tags" :key="tag" class="card-tag">{{ tag }}</span>
              </div>
               <p class="card-description">{{ project.description }}</p>
               <div class="card-meta"><span>PROJECT {{ String(index + 1).padStart(2, '0') }}</span><span>↗ LIVE</span></div>
              <div class="card-actions">
                <a v-if="!project.locked" :href="project.url" target="_blank" rel="noopener noreferrer" class="btn btn-primary">进入项目</a>
                <button v-else class="btn btn-primary" @click="openLockedProject(project)">进入项目</button>
                <a :href="project.github" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
              </div>
            </div>
          </div>

           <h3 class="section-subtitle"><span>02</span> Locked / In Progress <small>正在发生</small></h3>
          <div class="card-grid">
            <div v-for="project in lockedProjects" :key="project.name" class="card card-locked">
              <div class="card-header">
                <div>
                  <div class="card-name">{{ project.name }}</div>
                  <div class="card-english">{{ project.english }}</div>
                </div>
                 <span class="status-badge status-locked">LOCKED</span>
              </div>
              <div class="card-tags">
                <span v-for="tag in project.tags" :key="tag" class="card-tag">{{ tag }}</span>
              </div>
               <p class="card-description">{{ project.description }}</p>
               <div class="card-meta"><span>IN THE MAKING</span><span>SOON</span></div>
              <div class="card-actions">
                <button class="btn btn-primary" disabled>暂未开放</button>
                <a :href="project.github" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
              </div>
              <div class="card-locked-overlay">
                <span class="card-locked-overlay-text">项目仍在开发中</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="section about">
        <div class="container">
          <div class="section-heading"><div><p class="eyebrow">A NOTE FROM THE MAKER</p><h2 class="section-title">关于这个角落</h2></div></div>
          <div class="about-content">
            <p>WhiskHub 是一个持续更新的个人项目合集站，也是一个把想法放在阳光下观察的实验室。这里记录我在 AI 应用、Web 开发、数据处理与模型工具方向的探索。</p>
            <p>有些项目已经可以使用，有些还在长出骨架。它们共同组成一份开放的工作记录：不追求完美的橱窗，只保留真实的过程。</p>
            <div class="about-signature"><span>KeyandBoy</span><span>Curiosity over certainty.</span></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <span class="footer-copy">&copy; 2026 WhiskHub. Built with curiosity.</span>
        <ul class="footer-links">
          <li><a href="https://github.com/KeyandBoy" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </footer>

    <div v-if="showPasswordModal" class="modal-overlay" @click.self="closePasswordModal">
      <div class="modal">
        <h3 class="modal-title">🔒 暗色叙事</h3>
        <p class="modal-subtitle">请输入访问密码</p>
        <input
          v-model="passwordInput"
          type="password"
          class="modal-input"
          placeholder="请输入密码"
          @keyup.enter="submitPassword"
        />
        <p v-if="passwordError" class="modal-error">密码错误，请重试</p>
        <div class="modal-actions">
          <button class="btn btn-secondary" @click="closePasswordModal">取消</button>
          <button class="btn btn-primary" @click="submitPassword" :disabled="verifying">验证</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      onlineProjects: [
        {
          name: '暗色叙事',
          english: 'DARK NARRATIVE',
          url: 'https://dark-narrative1522.whiskhub.top',
          github: 'https://github.com/KeyandBoy/dark-narrative',
          tags: ['AI Storytelling', 'Life Simulation', 'Vue', 'Vercel Blob'],
          description: 'AI 驱动的沉浸式互动小说。',
          locked: true
        },
        {
          name: '万爬网',
          english: 'WanPa Web',
          url: 'https://wanpa-web8811.whiskhub.top',
          github: 'https://github.com/KeyandBoy/wanpa-web',
          tags: ['Image Crawler', 'Novel Reader', 'Python', 'Vue', 'DeepSeek AI'],
          description: '万爬网 - 图片/小说 多源批量爬取工具。'
        },
        {
          name: 'AI 人生重开手帐',
          english: 'AI Life Restart Journal',
          url: 'https://ai-life-restart0307.whiskhub.top',
          github: 'https://github.com/KeyandBoy/ai-life-restart',
          tags: ['AI Storytelling', 'Life Simulation', 'Vue', 'Vercel Blob'],
          description: '一个由 AI 驱动的人生模拟网页应用。用户可以选择世界、身份、天赋与命运，让 AI 生成一段独特的人生故事，并在终章留下人生总结、轮回馈赠与前世天赋。'
        },
        {
          name: 'STL 模型爬取与查看工具',
          english: 'STL Crawler Viewer',
          url: 'https://stl-crawler-viewer1718.whiskhub.top',
          github: 'https://github.com/KeyandBoy/stl-crawler-viewer',
          tags: ['STL', 'Crawler', 'Viewer', '3D Model'],
          description: '一个用于 STL 模型数据爬取、整理、浏览与查看的轻量化工具，方便集中管理模型资源和查看采集结果。'
        },
        {
          name: '隐匣',
          english: 'StegoBox',
          url: 'https://stegobox1413.whiskhub.top',
          github: 'https://github.com/KeyandBoy/stegobox',
          tags: ['Steganography', 'DCT', 'Image Hiding', 'Robust', 'Vanilla JS'],
          description: '鲁棒 DCT 图像隐写工具：把图片、文件或文本藏进另一张图，抵抗 JPEG/WebP 重压缩与等比缩放，纯浏览器本地运行，不上传服务器。'
        }
      ],
      lockedProjects: [
        {
          name: '若依家教 / 辅导平台',
          english: 'RuoYi Tutor Platform',
          github: 'https://github.com/KeyandBoy/ruoyi-tutor-platform',
          tags: ['RuoYi', 'Spring Boot', 'Management System', 'In Progress'],
          description: '一个基于 RuoYi 技术体系的辅导 / 家教平台项目，计划用于课程管理、用户管理、订单流程和后台运营管理。目前仍在开发与整理中，暂未开放线上访问。'
        },
        {
          name: 'STL 分类训练工具',
          english: 'STL Classifier Trainer',
          github: 'https://github.com/KeyandBoy/stl-classifier-trainer',
          tags: ['STL', 'Classifier', 'Training', 'Machine Learning', 'In Progress'],
          description: '一个面向 STL 模型分类任务的训练工具项目，计划用于模型数据整理、类别标注、训练流程管理与分类实验。目前仍在开发中，暂未开放线上访问。'
        }
      ],
      showPasswordModal: false,
      passwordInput: '',
      passwordError: false,
      verifying: false,
      lockedTarget: null
    };
  },
  methods: {
    openLockedProject(project) {
      this.lockedTarget = project;
      this.passwordInput = '';
      this.passwordError = false;
      this.showPasswordModal = true;
    },
    closePasswordModal() {
      this.showPasswordModal = false;
      this.lockedTarget = null;
      this.passwordError = false;
    },
    async submitPassword() {
      if (this.verifying) return;
      this.verifying = true;
      this.passwordError = false;
      const target = this.lockedTarget;
      const win = window.open('', '_blank');
      if (!win) {
        this.passwordError = true;
        this.verifying = false;
        return;
      }
      try {
        const res = await fetch('/api/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: this.passwordInput })
        });
        if (res.ok) {
          win.location.href = target.url;
          this.closePasswordModal();
        } else {
          win.close();
          this.passwordError = true;
        }
      } catch (e) {
        win.close();
        this.passwordError = true;
      } finally {
        this.verifying = false;
      }
    }
  }
};
</script>
