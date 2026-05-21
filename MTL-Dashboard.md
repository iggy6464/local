---
title: "MTL Dashboard"
type: entity
tags: [tool, dashboard, HTML, material-tracking]
sources: [mtl-dashboard-development]
last_updated: 2026-04-26
---

# MTL Dashboard

HTML/JavaScript 기반 자재 추적 대시보드. Version 40부터 117까지 약 80회 iteration.

## Core Features
- Excel 파일 업로드 및 자동 파싱
- 5-stage [[Material-Pipeline-Logic]]: Scope → Ordered → In-Transit → On-Site → Installed
- [[I-MR-Analysis]] 기반 Forecast
- AI Analysis Mode (Trend, LLI Doughnut, Simulation)
- Diagnostics Tab (Full Pipeline Achievement, Treemap, Bulk Simulator)
- 3-Week Look-Ahead Plan with Carry-Over logic

## Technical Stack
Chart.js, Handsontable, SheetJS, Tailwind CSS, localStorage
