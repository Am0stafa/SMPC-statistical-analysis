# Secure voting using Multi-Party Computation (MPC) is a fascinating application of cryptographic techniques that ensures both voter privacy and correct tallying of votes. The idea is to enable the participants to learn the result (i.e., the total count of votes for each candidate or option) without learning any individual's specific vote.

# It works by Secret Sharing: When a voter casts their vote, instead of submitting a plaintext vote, they secret-share their vote. This means they break their vote into pieces (shares) such that only by combining a sufficient number of these shares can the original vote be reconstructed. Each share by itself reveals nothing about the vote.

#Under The Hood
# Secret Sharing: When a vote is cast, it's divided into secret shares. These shares are distributed among all participating parties. No single party can determine the original vote from its share alone.

# Vote Summation: Using MPyC, we can perform arithmetic on secret-shared values. Thus, we can compute the total votes for each candidate without revealing individual votes.

# Result Decryption: After securely computing the sum of votes for each candidate, the total is jointly decrypted by the parties to get the final tally.

# Winner Declaration: The candidate with the highest tally is declared the winner. In case of ties, multiple winners can be announced.

from mpyc.runtime import mpc
from mpyc.sectypes import SecureInt

mpc.start()

async def main():
    # Initialize secure integer type
    secint = SecureInt()

    # 1. Define the candidates
    inputCandidates = input("Enter the candidates coma separated: ")
    candidates = inputCandidates.split(",")
    # candidates = ["Alice", "Bob", "Charlie"]
    n = len(candidates)
    print(f"Candidates: {', '.join(candidates)}")

    # 2. Get number of voters
    print(f"Party {mpc.pid}: How many voters are there?")
    num_voters = int(input())
    total_voters = await mpc.output(mpc.sum([secint(num_voters)]))

    # 3. Securely gather votes
    votes = [secint(0)] * n  # Initialize votes
    for _ in range(num_voters):
        print(f"Party {mpc.pid}: Cast your vote by entering a number (1-{n}):")
        choice = int(input()) - 1
        votes[choice] += 1

    # Gather the sum of votes for each candidate
    tally = [await mpc.output(mpc.sum(v)) for v in votes]

    # 4. Determine the winner
    max_votes = max(tally)
    winners = [candidates[i] for i, v in enumerate(tally) if v == max_votes]

    print(f"Results: {', '.join([f'{candidates[i]}: {v}' for i, v in enumerate(tally)])}")
    print(f"Winner(s): {', '.join(winners)}")

mpc.run(main())
