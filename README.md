# AegisZT – Adaptive Zero-Trust Security Monitoring Platform

> **Adaptive Cyber Defense**: รวมพลัง **Zero Trust Access Control** + **Mini-SIEM Monitoring**  
> ป้องกัน, ตรวจจับ, และตอบสนองภัยไซเบอร์แบบครบวงจร อิงตาม **OWASP Top Ten Threats**

---

## 🚀 Features
- **Zero Trust Gateway**
  - รองรับ MFA / WebAuthn / RBAC / ABAC
  - Policy Engine ด้วย OPA/Rego
  - WAF (Coraza/OWASP CRS) + Rate limiting

- **Security Monitoring (Mini-SIEM)**
  - Collector รองรับ Fluent Bit / OpenTelemetry
  - Analyzer: Rule-based (Sigma) + ML-based (IsolationForest, XGBoost)
  - Risk Scoring ตาม Severity × Confidence × Asset value
  - Mapping กับ **OWASP Top Ten** + **MITRE ATT&CK**

- **Dashboard & Alerting**
  - Realtime Dashboard (Next.js + Tailwind + Grafana)
  - Export PDF/Excel สำหรับผู้บริหาร
  - Alert ผ่าน Slack / LINE Notify / Email
  - Incident Response: ปุ่ม “Respond” → Block IP / Force MFA / Revoke token

- **Adaptive Feedback Loop**
  - Mini-SIEM วิเคราะห์ log → ส่ง feedback ไปอัปเดต Policy Zero Trust
  - ทำให้ระบบเป็น **Dynamic & Adaptive Security**

---

## 🏗 System Architecture
```mermaid
flowchart LR
    U[User / Device] --> ZT[Zero Trust Gateway]
    ZT --> APP[Application / API]
    APP --> LOGS[Log Collector (Fluent Bit / OTel)]
    LOGS --> MQ[Stream (Kafka / Redpanda)]
    MQ --> DETECT[Detection Engine<br>Rules + ML]
    DETECT --> SCORE[Risk Scoring]
    SCORE --> UI[Dashboard & Reports]
    SCORE --> ALERT[Alerting & SOAR]
    ALERT -->|Block/Force MFA| ZT
    DETECT -->|Feedback Policy Update| ZT
