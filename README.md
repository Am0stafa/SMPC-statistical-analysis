# multi-party-computation-for-statistical-analysis
 performing privacy-preserving statistical analyses in a secure multiparty setting concentrating on cryptographic privacy

# What is Secure Multi-Party Computation (SMPC)?
It is a subfield within cryptography that deals with allowing parties to compute a function over their inputs, ensuring that each participant doesn't reveal any more about their input than can be inferred from the output. In other words, parties can jointly compute a function without revealing their individual inputs to each other.


## Overview

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

