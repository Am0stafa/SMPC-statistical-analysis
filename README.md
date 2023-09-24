# Secure Multi-Party Computation (SMPC) for Privacy-Preserving Survey Analysis
Welcome to this advanced suite of statistical tools using Secure Multi-Party Computation (SMPC). Tailored for the PANAS & BFI-10 questionnaires, this repository features three unique implementations—Secret Sharing, MPyC, and Jiff—to ensure data privacy and integrity while analyzing survey results.

# What is Secure Multi-Party Computation (SMPC)?
It is a subfield within cryptography that deals with allowing parties to compute a function over their inputs, ensuring that each participant doesn't reveal any more about their input than can be inferred from the output. In other words, parties can jointly compute a function without revealing their individual inputs to each other.

Computation Overhead: Secure computations can be computationally expensive. Depending on the number of parties, size of the data, and complexity of operations, this can introduce significant latency.

# Overview

1. **Problem Statement:** 
   - Suppose there are `n` parties `P_1, P_2, ..., P_n`, each with a private input `x_i`.
   - The goal is to compute a function `f(x_1, x_2, ..., x_n)` without revealing any party's individual inputs to others.

2. **Applications:** SMPC can be used in:
   - Privacy-preserving data mining
   - Secure voting systems
   - Auctions without trusted third parties
   - Privacy-preserving medical and financial data processing
   - Privacy-preserving data analysis: Multiple organizations might want to perform joint analytics without exposing their individual datasets.

3. **Protocols:** Different protocols achieve SMPC:
   - **Secret Sharing:** Inputs are divided into secret shares and computations are done on these shares.
   - **Garbled Circuits:** A function is turned into a Boolean circuit, then 'garbled' or encoded.
   - **Homomorphic Encryption:** Computation on encrypted data without needing to decrypt it first.

4. **Properties:** SMPC aims for:
   - **Privacy/Secrecy:** No extra information about inputs is learned apart from the output.
   - **Correctness:** The output should be the correct function of the inputs.

5. **Challenges:** 
   - Efficiency concerns
   - Collusion threats
   - Need for fairness in output distribution

# Libraries used Jiff and MPyC why and what is the difference?

**JIFF** is a JavaScript framework that allows for secure multi-party computation. It uses cryptographic techniques like homomorphic encryption and secret sharing to enable different parties to jointly compute data without revealing their individual inputs.JIFF handles communication between parties, uses encryption, and validates computations. This allows joint computing of data while keeping inputs private.

## Disadvantage of Jiff is:
 - Performance Overheads: Web-based systems like those built on JIFF might face performance overheads compared to native applications, especially for computationally intensive tasks\
 - Restricted operations - The set of operations available in JIFF is growing but still limited compared to normal JavaScript. Advanced operations like machine learning may be difficult.
  -Arithmetic operations: JIFF supports standard arithmetic like addition, subtraction, multiplication, division, and modulus between shared values.
  -Comparisons: Can compare shared values for equality and inequality. Also supports greater than and less than.
  -Conditional statements: if/else statements are supported based on a comparison of shares.
  -Basic data structures: JIFF has arrays and matrices of shared values.
  -Cryptographic operations: JIFF implements sharing, random number generation, and opening shares.
  -Communication primitives: JIFF handles communication between parties needed for SMPC.\
However, many native JavaScript operations are not supported by JIFF such as:

Native objects/data structures: No maps, sets, date objects etc.
 -String operations: No concatenation, slicing, searching, etc.
 -Advanced math functions: exponentiation, roots, trigonometry are missing.
 -Loops/iterations: Limited support for for/while loops, no recursion.
 -Functional programming: Methods like map, filter, reduce are unavailable.
 -Classes and custom objects.\

**MPyC** MPyC is a Python library for secure multi-party computation. MPyC has a modular architecture, with separate modules for different MPC primitives. This includes secret sharing, garbled circuits, oblivious transfer, etc. The high-level APIs provide abstractions like Share, ShareArray, and Party to simplify writing MPC applications. The net module handles network communication between parties using either sockets or asyncio.

## Protocols Supported

- Shamir's secret sharing - For arithmetic circuits over finite fields.

- SPDZ - Supports arithmetic sharing with lower communication cost.

- Yao's Garbled Circuits - For binary or arithmetic circuits with constant round complexity. 

- Oblivious Transfer - Used as a subprotocol in other MPC protocols.

- Homomorphic Encryption - Integrates with HE libraries like Pyfhel and Palisade.

## Usability

- Integrates natively with NumPy, PyTorch, TensorFlow, Pandas for easier adoption.

- Active development and documentation - protocols are explained in detail.

- Includes demos and tutorials covering topics like private set intersection, credit scoring, and more.

- Support for both synchronous and asynchronous (promise-based) programming.

## Limitations

- Still lower performance than optimized custom protocols.

- Limited operations compared to native Python (no strings, objects, etc).

- Debugging MPC applications can be tricky.

Here is a comparison of JIFF vs MPyC in Markdown format:

# JIFF vs MPyC

When should you use JIFF vs. MPyC for secure multi-party computation?

## JIFF

- Programming language: JavaScript
- Implementation: JavaScript
- Protocols: Mainly secret sharing 
- Maturity: Relatively new
- Functionality: More limited
- Performance: Slower
- Use cases: Basic MPC in JavaScript

## MPyC

- Programming language: Python
- Implementation: C++ and Python 
- Protocols: Secret sharing, SPDZ, garbled circuits, homomorphic encryption
- Maturity: More mature 
- Functionality: More operations
- Performance: Faster due to C++
- Use cases: Advanced MPC like machine learning

## Comparison

- If using JavaScript, JIFF may be preferable
- For wide protocol support, more functionality, and performance - use MPyC
- For Python integration, definitely consider MPyC
- Evaluate both against your specific needs

# Research 
After looking for limitations in previous researches. I came out with 3 implementations. This project implements secure multi-party computation techniques to enable statistical analysis of survey response data while preserving privacy.

### Importance of the Research

In today's data-driven world, ensuring the privacy of individual's data while drawing meaningful insights from aggregated datasets is paramount. My solution bridges the gap between data privacy and efficient statistical analysis. With the increasing need to conduct surveys and gather feedback while ensuring data confidentiality, the SMPC tools stand as a beacon, demonstrating the possibility of achieving the best of both worlds.

## Limitations found and where tried to improve
 - Limited analysis functions 
    - Only simple statistics like sorting and filtering are demonstrated. More complex analytic workflows are not implemented or tested.
 - No independent security audit 
    - There is no third-party security analysis of the implementation. The security claims rely on the system designers' own analysis.
 - The prototype implementation uses a simple client that reads questionnaire data from a CSV file rather than a full client application. Evaluating performance with a real client app would be needed.
 - Deployment was tested only on a local network. Performance when data miners are geographically distributed is not evaluated.
 - There is no empirical evaluation of the system's performance. Metrics like computation time, communication overhead, and scalability should be benchmarked.
 - The system only considers binary yes/no votes. Allowing nuanced ratings could provide more useful feedback.

## Overview

The project contains 3 software tools for:

- Conducting surveys/questionnaires and collecting response data
- Calculating core statistics on the data including:
  - Mean 
  - Mode
  - Frequency tables

The statistics are computed using cryptographic techniques so that individual responses remain private.

## Implementations

Three SMPC techniques are implemented:

- Secret sharing using a shuffle server model
- MPyC
- Jiff 

Each enables computing the statistical measures on the joint data from multiple parties without revealing individual party data.

## Other approaches considered and any may be another point for further research:
- Encrypted Databases:
    - Transparent Data Encryption (TDE): Some databases offer this feature where data is encrypted automatically before being written to disk and decrypted when read.
    - Application-layer Encryption: Here, data is encrypted in the application before it's sent to the database. The application retains the encryption keys, and the database only sees (and stores) encrypted data.
- Distributed Databases: Systems like Apache Cassandra, CockroachDB, or Amazon DynamoDB can distribute data across multiple nodes or clusters, which not only offers scalability but also ensures redundancy.
- Immutable Data Storage: Systems like blockchain or distributed ledger technology ensure that once data is written, it cannot be changed. This offers an additional layer of security and accountability, ensuring that shared data in the SMPC setup remains unchanged.
- Decentralized File Storage:by using any 3rd part solution



## The Solutions

#### Secret Sharing

The essence of Secret Sharing is to divide data into multiple parts, sending each part to a different server. Data remains confidential as no single server has access to the full data. Aggregated statistics can then be derived without exposing individual responses. So i had implemented my own Secret Sharing algorithm using additional security measures to ensure data privacy, such as shuffling the data before sharing it.

<!-- ![Secret Sharing Diagram](path) -->
[![image](https://www.linkpicture.com/q/IMG_1389.jpg)](https://www.linkpicture.com/view.php?img=LPic6510c410915592079277193)

#### MPyC

It allows for multiple parties to input answers to a set of questions securely and privately, and then calculates the mean and mode of the answers.

Requirements: -Python 3.7 or above -MPyC (pip install mpyc) -collections (pip install collections)

#### Jiff

### How does the JIFF solution fit into our context?

1. Users submit answers confidentially. Their answers are split into shares and distributed.

2. The central server, without knowing any individual's responses, helps facilitate the distributed computation, such as calculating the mean, mode, and frequencies of the answers.

3. The final statistics (mean, mode, frequency table) are computed without any single entity knowing the individual inputs. Only the aggregate statistics are revealed.

Requirements: -node.js , -npm i jiff  and -mongodb

## Performance Evaluation

To assess the performance of my solutions, i meticulously examined the **computation time**, **scalability**, and **overhead** of each implementation. Benchmarks were executed on both PANAS and BFI-10 questionnaires.

#### How Performance was Evaluated:

1. **Computation Time:** Measured the time taken to compute the statistical analyses.
2. **Scalability:** Assessed how each solution responded to an increase in the volume of survey data.
3. **Overhead:** Evaluated the additional computational costs associated with ensuring privacy-preserving analysis.

## Screenshots

Screenshots showcasing performance metrics and key features will be added shortly.
