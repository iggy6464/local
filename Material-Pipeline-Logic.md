---
title: "Material Pipeline Logic"
type: concept
tags: [material, pipeline, tracking, 5-stage]
sources: [mtl-dashboard-development]
last_updated: 2026-04-26
---

# Material Pipeline Logic

## 5-Stage Pipeline
```
Scope (Total Qty) → Ordered → In-Transit (Preparation) → On-Site (Delivered) → Installed
```

## Calculation Rules
- `Not Ordered = Total Qty - Ordered`
- `Ordered = Delivered at Site + In-Transit`
- `Not Ordered (Col I) = Remaining to Order (Col Q)` — **이 등식은 invariant**

## Common Bugs
- On-Site % 계산에서 In-Transit 수량 이중 카운트
- Item-count 기반과 Qty 기반 로직 혼용
- KG 단위 대량 아이템이 S-Curve를 지배 (해결: Item Count 기반 전환)

## Related
- [[MTL-Dashboard]]
- [[EPC-Domain-Invariants]]
