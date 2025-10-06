---
layout: ../../layouts/TermsLayout.astro
---

# Security Policy

This security policy establishes the baseline security requirements for Sokkel's
operations, protecting customer data, intellectual property, and infrastructure
while supporting our mission to deliver optimized software delivery solutions.

This policy applies to all Sokkel employees, contractors, partners, and systems
handling customer data or accessing company resources.

## Principles

### Protect Customer Data Above All

Any information from customers, including deployment configurations,
credentials, and usage data, is treated as our most sensitive asset. This data
is encrypted both when stored and transmitted, and is never shared with
unauthorized parties.

### Use Strong Authentication Everywhere

All team members must use multi-factor authentication on every system that
touches customer data or company infrastructure. This includes GitHub, cloud
providers, email, and any development tools. Password managers are required for
generating and storing unique passwords.

### Keep Systems Updated and Monitored

All development machines, servers, and dependencies are kept current with
security patches. We monitor our systems for unusual activity and have automated
alerts set up for potential security issues.

### Plan for Problems

We maintain current backups of all critical data and have documented procedures
for responding to security incidents. If something goes wrong, we notify
affected customers within 24 hours and document what happened so we can prevent
it in the future.

## Daily Practices

When developing or deploying code, we scan for vulnerabilities before pushing to
production. Customer environments are kept separate from each other and from our
internal systems. Any changes to production systems require at least 2 team
members to review and approve.

We treat laptops and development environments as potential attack vectors, so
sensitive customer data is accessed only through secure, audited connections.
Local development uses test data whenever possible, and any real customer data
is handled with extra care and deleted when no longer needed.

All access to customer systems is logged and reviewed regularly. We maintain a
principle of least access, meaning people and systems only get the permissions
they actually need to do their job.

## Incident Response

If we discover or suspect a security issue, we immediately contain the problem
to prevent further damage, then investigate the root cause. Customer
notification happens within 24 hours for any incident involving their data, and
we document everything to improve our security going forward.

## Compliance and Growth

As we grow, this policy will evolve to meet compliance requirements like SOC 2
and GDPR that enterprise customers expect. We review and update these practices
quarterly or whenever we add new systems or team members.

---

Questions or Security Concerns: security@sokkel.io
