<template>
  <div class="app">
    <nav class="navbar">
      <div class="container">
        <a href="#" class="navbar-brand">WhiskHub</a>
        <ul class="navbar-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://github.com/KeyandBoy" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </nav>

    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">WhiskHub</h1>
          <p class="hero-subtitle">A personal hub for AI tools, web applications and creative engineering projects.</p>
          <p class="hero-description">这里收纳了我正在开发和维护的 Web 应用、AI 工具、数据处理项目与创意实验。每一个项目都是一次把想法做成真实产品的尝试。</p>
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">查看项目</a>
            <a href="https://github.com/KeyandBoy" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Projects</h2>

        <h3 class="section-subtitle">Online Projects</h3>
        <div class="card-grid">
          <div class="card">
            <div class="card-header">
              <div>
                <div class="card-name">AI 人生重开手帐</div>
                <div class="card-english">AI Life Restart Journal</div>
              </div>
              <span class="status-badge status-online">Online</span>
            </div>
            <div class="card-tags">
              <span class="card-tag">AI Storytelling</span>
              <span class="card-tag">Life Simulation</span>
              <span class="card-tag">Vue</span>
              <span class="card-tag">Vercel Blob</span>
            </div>
            <p class="card-description">
              一个由 AI 驱动的人生模拟网页应用。用户可以选择世界、身份、天赋与命运，让 AI 生成一段独特的人生故事，并在终章留下人生总结、轮回馈赠与前世天赋。
            </p>
            <div class="card-actions">
              <a href="https://ai-life-restart.whiskhub.top" target="_blank" rel="noopener noreferrer" class="btn btn-primary">进入项目</a>
              <a href="https://github.com/KeyandBoy/ai-life-restart" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <div>
                <div class="card-name">STL 模型爬取与查看工具</div>
                <div class="card-english">STL Crawler Viewer</div>
              </div>
              <span class="status-badge status-online">Online</span>
            </div>
            <div class="card-tags">
              <span class="card-tag">STL</span>
              <span class="card-tag">Crawler</span>
              <span class="card-tag">Viewer</span>
              <span class="card-tag">3D Model</span>
            </div>
            <p class="card-description">
              一个用于 STL 模型数据爬取、整理、浏览与查看的轻量化工具，方便集中管理模型资源和查看采集结果。
            </p>
            <div class="card-actions">
              <a href="https://stl-crawler-viewer.whiskhub.top" target="_blank" rel="noopener noreferrer" class="btn btn-primary">进入项目</a>
              <a href="https://github.com/KeyandBoy/stl-crawler-viewer" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
            </div>
          </div>
        </div>

        <h3 class="section-subtitle">Locked / In Progress</h3>
        <div class="card-grid">
          <div class="card card-locked">
            <div class="card-header">
              <div>
                <div class="card-name">RuoYi Tutor Platform</div>
                <div class="card-english">若依家教 / 辅导平台</div>
              </div>
              <span class="status-badge status-locked">Locked</span>
            </div>
            <div class="card-tags">
              <span class="card-tag">RuoYi</span>
              <span class="card-tag">Spring Boot</span>
              <span class="card-tag">Management System</span>
              <span class="card-tag">In Progress</span>
            </div>
            <p class="card-description">
              一个基于 RuoYi 技术体系的辅导 / 家教平台项目，计划用于课程管理、用户管理、订单流程和后台运营管理。目前仍在开发与整理中，暂未开放线上访问。
            </p>
            <div class="card-actions">
              <button class="btn btn-primary" disabled>暂未开放</button>
              <a href="https://github.com/KeyandBoy/ruoyi-tutor-platform" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
            </div>
            <div class="card-locked-overlay">
              <span class="card-locked-overlay-text">项目仍在开发中</span>
            </div>
          </div>

          <div class="card card-locked">
            <div class="card-header">
              <div>
                <div class="card-name">STL Classifier Trainer</div>
                <div class="card-english">STL 分类训练工具</div>
              </div>
              <span class="status-badge status-locked">Locked</span>
            </div>
            <div class="card-tags">
              <span class="card-tag">STL</span>
              <span class="card-tag">Classifier</span>
              <span class="card-tag">Training</span>
              <span class="card-tag">Machine Learning</span>
              <span class="card-tag">In Progress</span>
            </div>
            <p class="card-description">
              一个面向 STL 模型分类任务的训练工具项目，计划用于模型数据整理、类别标注、训练流程管理与分类实验。目前仍在开发中，暂未开放线上访问。
            </p>
            <div class="card-actions">
              <button class="btn btn-primary" disabled>暂未开放</button>
              <a href="https://github.com/KeyandBoy/stl-classifier-trainer" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
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
        <h2 class="section-title">About WhiskHub</h2>
        <div class="about-content">
          <p>WhiskHub 是一个持续更新的个人项目合集站。这里记录了我在 AI 应用、Web 开发、数据处理、模型工具和课程实践方向上的探索。主站用于统一整理项目入口，让已经上线的应用可以被快速访问，也为仍在开发中的项目保留清晰的位置。</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <span class="footer-copy">&copy; 2026 WhiskHub. Built with curiosity.</span>
        <ul class="footer-links">
          <li><a href="https://github.com/KeyandBoy" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>
