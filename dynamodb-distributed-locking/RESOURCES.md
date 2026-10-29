# DynamoDB Distributed Locking Resources

## Knowledge

- [AWS Developer Guide: Distributed locking with the DynamoDB Lock Client](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BestPractices_DistributedLocking.html)
  Primary source for the lock-item model, leases, heartbeats, conditional acquisition/release, use cases, and tradeoffs. [Raw copy](resources/aws-distributed-locking.html).
- [AWS Developer Guide: Condition expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html)
  Authoritative semantics for conditional puts, updates, and deletes. Use when reasoning about atomic lock transitions. [Raw copy](resources/aws-condition-expressions.html).
- [boto3: Table.update_item](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb/table/update_item.html)
  Python request syntax and behavior for creating or replacing lock state conditionally. [Raw copy](resources/boto3-table-update-item.html).
- [boto3: Table.delete_item](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb/table/delete_item.html)
  Python request syntax and behavior for owner-checked release. [Raw copy](resources/boto3-table-delete-item.html).
- [AWS Developer Guide: DynamoDB Time to Live](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html)
  TTL timestamp format and eventual deletion semantics. Use for lock-table cleanup, not lock correctness. [Raw copy](resources/aws-dynamodb-ttl.html).
- [Martin Kleppmann: How to do distributed locking](https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html)
  Detailed pause-and-delay failure timelines and the canonical fencing-token pattern. Use for resource-safety reasoning. [Raw copy](resources/kleppmann-distributed-locking.html).
- [Mike Burrows: The Chubby lock service for loosely-coupled distributed systems](https://research.google/pubs/the-chubby-lock-service-for-loosely-coupled-distributed-systems/)
  Primary systems literature for sequencers: lock-generation metadata checked by the server receiving protected operations. See §2.4. [Raw paper](resources/chubby-osdi-2006.pdf).
- [AWS Developer Guide: Update expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html)
  Authoritative syntax for atomic numeric increments and `if_not_exists`. Use when generating fencing tokens during acquisition. [Raw copy](resources/aws-update-expressions.html).
- [AWS Developer Guide: DynamoDB transactions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html)
  Atomic multi-item writes and serializable isolation. Use when the protected data and fencing state can be updated together in DynamoDB. [Raw copy](resources/aws-dynamodb-transactions.html).
- [Amazon S3 User Guide: Conditional writes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/conditional-writes.html)
  Server-side `If-Match` and `If-None-Match` preconditions. Use as a compare-and-swap alternative for S3 read-modify-write workflows. [Raw copy](resources/aws-s3-conditional-writes.html).

## Wisdom (Communities)

- [AWS re:Post: Amazon DynamoDB](https://repost.aws/tags/TAc6QWr2g2QnSIr8PWQQZfIg/amazon-dynamo-db)
  Use for operational design review and unfamiliar DynamoDB failure behavior; include a minimal timeline and condition expressions when asking.

