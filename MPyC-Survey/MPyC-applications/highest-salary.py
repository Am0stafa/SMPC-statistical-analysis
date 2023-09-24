from mpyc.runtime import mpc
from mpyc.sectypes import SecureInt # this is the secure integer type which does not reveal the value

# Initialize MPyC
mpc.start()

async def main():
    # Secure integer type
    secint = SecureInt()

    # Get the number of users who want to participate
    print(f"Party {mpc.pid}: Do you want to participate? (1 for Yes, 0 for No)")
    choice = int(input())
    total_participants = await mpc.output(mpc.sum([choice]))

    # If less than two participants, end
    if total_participants < 2:
        print(f"Only {total_participants} participants. Need at least 2 to compare salaries.")
        return

    # Get and securely compare salaries if there are at least two participants
    print(f"Party {mpc.pid}: Enter your salary (will remain confidential):")
    salary = int(input())

    # Get highest salary
    max_salary = await mpc.output(mpc.max([secint(salary)]))

    # We won't reveal who has the maximum salary, just the value
    print(f"The highest salary among the participants is: {max_salary}")

mpc.run(main())
