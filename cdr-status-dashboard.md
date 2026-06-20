---
title: "CDR Status Dashboard"
type: source
tags: [dashboard, CDR, construction-readiness]
sources: []
last_updated: 2026-04-26
---

# CDR Status Dashboard (v1 → v15)

## Summary
Construction Delivery Readiness 상태를 추적하는 대시보드. Mixed-basis bar 로직(item-count for Ordered/At Vendor/On-site, qty-based for Installed)과 Building Filter(FA/CP) 적용.

## Key Design Decision
CDR Readiness Milestone은 반드시 **Start Date**를 사용. Start Date = 장비 반입 준비 완료 시점으로, Finish Date가 아님. Float 계산은 Driver Activity Finish → CDR Start 기준.

## Related
- [[CDR-Status-Dashboard]]
- [[CDR-Readiness-Milestone]]
- [[FA1-Building]]
- [[CP1-Building]]
