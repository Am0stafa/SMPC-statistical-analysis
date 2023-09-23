# multi-party-computation-for-statistical-analysis
 performing privacy-preserving statistical analyses in a secure multiparty setting concentrating on cryptographic privacy

# What is Secure Multi-Party Computation (SMPC)?
It is a subfield within cryptography that deals with allowing parties to compute a function over their inputs, ensuring that each participant doesn't reveal any more about their input than can be inferred from the output. In other words, parties can jointly compute a function without revealing their individual inputs to each other.


# Overview

1. **Problem Statement:** 
   - Suppose there are `n` parties `P_1, P_2, ..., P_n`, each with a private input `x_i`.
   - The goal is to compute a function `f(x_1, x_2, ..., x_n)` without revealing any party's individual inputs to others.

2. **Applications:** SMPC can be used in:
   - Privacy-preserving data mining
   - Secure voting systems
   - Auctions without trusted third parties
   - Privacy-preserving medical and financial data processing

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

