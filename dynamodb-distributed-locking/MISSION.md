# Mission: DynamoDB Distributed Locking

## Why
Build a real distributed lock in Python with boto3 so multiple application instances can coordinate access to a shared resource safely.

## Success looks like
- Implement acquisition, lease renewal, and owner-only release using DynamoDB conditional writes.
- Test contention, crashes, expired leases, and stale lock holders.
- Explain the clock, TTL, deadlock, and fencing requirements before using the lock in production.

## Constraints
- Use Python and boto3 rather than the Java DynamoDB Lock Client.
- Build on existing knowledge of conditional writes and optimistic concurrency.

## Out of scope
- Implementing the Java lock client.
- Comparing other lock stores unless needed for a design decision.
