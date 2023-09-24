# basically this application allows each bidder to submits their bid without knowing the bid of the other bidders. The highest bid wins the auction.

# Here's a basic structure:\
# - Each bidder secretly shares their bid among all participating parties.
# - The bids are securely compared to determine the highest bid.
# - The highest bid is revealed, and the winner is announced.

from mpyc.runtime import mpc
from mpyc.sectypes import SecureInt

mpc.start()

async def main():
    # Initialize secure integer type
    secint = SecureInt()

    # 1. Each bidder submits their bid
    print(f"Party {mpc.pid}: Enter your bid (integer value):")
    bid = int(input())
    secure_bid = secint(bid)

    # 2. Securely compare bids to determine the highest bid
    max_bid = await mpc.output(mpc.max([secure_bid]))

    # 3. Announce the highest bid and the winner
    if bid == max_bid:
        print(f"Party {mpc.pid} has won the auction with a bid of {max_bid}!")
    else:
        print(f"Party {mpc.pid}: My bid was not the highest.")

mpc.run(main())
