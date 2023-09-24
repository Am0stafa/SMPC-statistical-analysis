from mpyc.runtime import mpc
from termcolor import colored
from collections import Counter

async def main():
    N = int(input("number of Users who will answer the survey: "))
    secFlt = mpc.SecFlt(16)
    
    questions = [
    ("I feel interested", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel distressed", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel excited", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel upset", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel strong", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel guilty", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel scared", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel hostile", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel enthusiastic", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel proud", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel irritable", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel alert", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel ashamed", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel inspired", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel nervous", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel determined", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel attentive", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel jittery", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel active", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely']),
    ("I feel afraid", ['Not at all', 'A little bit', 'Moderately', 'Very', 'Extremely'])]
    answers = [[] for _ in range(N)]

    await mpc.start()

    for i in range(N):
        for question, choices in questions:
            print(f'User {i+1}: {question}')
            for j, choice in enumerate(choices):
                print(f'{j+1}. {choice}')
            # Securely input the answer from the party
            isValid = False
            while(isValid == False):
                answer = mpc.input(secFlt(int(input('You have chosen answer: '))))
                if(await mpc.output(answer[0]) >= 6 or await mpc.output(answer[0]) < 1):
                    print(colored("Please enter a valid number (from 1 to 5)", 'red'))
                else:
                    isValid = True
            # Add the answer to the list for this party
            answers[i].append(answer)

    # Answers mean
    meanArray = []
    for i, (question, choices) in enumerate(questions):
        mean = 0
        sum = 0
        for j in range(N):
            ans = answers[j][i]
            sum = sum + ans[0] 
        mean = sum/secFlt(N)
        meanArray.append(mean)
    print(f'Answers Mean {await mpc.output(meanArray)}')

    # Answers mode
    mode = []
    for i, (question, choices) in enumerate(questions):
        temp = []
        for j in range(N):
            ans = answers[j][i]
            temp.append(ans[0])
        commonElements = []
        if(Counter(await mpc.output(temp)).most_common()[0][1] == 1):
            commonElements.append(mpc.input(secFlt(0.0)))
        else:
            commonElements.append(mpc.input(secFlt(Counter(await mpc.output(temp)).most_common()[0][0])))
            for j in range(1, len(Counter(await mpc.output(temp)).most_common())):
                if(Counter(await mpc.output(temp)).most_common()[0][1] > Counter(await mpc.output(temp)).most_common()[j][1]):
                    break
                else:
                    commonElements.append(mpc.input(secFlt(Counter(await mpc.output(temp)).most_common()[j][0])))
        mode.append(commonElements)
    print("answer mode")
    for i in range(len(questions)):
        print(f'mode for question {i + 1}: ' , end = '')
        for j in range(len(mode[i])):
            print(await mpc.output(mode[i][j]) , end =' ')
        print()


    #Frequency Table
    frequencyTable = [[0, 0, 0, 0, 0] for i in range(len(questions))]
    finalFrequencyTable = [[0, 0, 0, 0, 0] for i in range(len(questions))]
    for i, (question, choices) in enumerate(questions):
        temp = []
        for j in range(N):
            ans = answers[j][i]
            temp.append(ans[0])
        for k in range(len(choices)):
            frequencyTable[i][k] = mpc.input(secFlt(frequencyTable[i][k] + Counter(await mpc.output(temp))[k + 1]))
            help = frequencyTable[i][k]
            finalFrequencyTable[i][k] = help[0]
    # Print the frequency table in the specified format
    print("Frequency Table: ")
    for i, (question, choices) in enumerate(questions):
        for j, choice in enumerate(choices):
            print(f'{int(await mpc.output(finalFrequencyTable[i][j])):>3}' , end =' ')
        print()



    def classify_party(positive_affect_score, negative_affect_score):
        if positive_affect_score < 25:
            positive_class = 'low'
        elif positive_affect_score < 35:
            positive_class = 'medium'
        else:
            positive_class = 'high'

        if negative_affect_score < 15:
            negative_class = 'low'
        elif negative_affect_score < 25:
            negative_class = 'medium'
        else:
            negative_class = 'high'

        return positive_class, negative_class




    async def calculateScores():
        userNumber = 1
        for answer in answers:
            positive_affect_score = 0
            negative_affect_score = 0
            for i, (question, choices) in enumerate(questions):
                score = answer[i][0]  # assume answers is a list of secFlt values
                if i+1 in [1, 3, 5, 9, 10, 12, 14, 16, 17, 19]:
                    positive_affect_score+= secFlt(await mpc.output(score))
                elif i+1 in [2, 4, 6, 7, 8, 11, 13, 15, 18, 20]:
                    negative_affect_score += secFlt(await mpc.output(score))

            positive_class, negative_class = classify_party(await mpc.output(positive_affect_score), await mpc.output(negative_affect_score))

            print(f'Positive Affect Classification for user number {userNumber} : {positive_class}')
            print(f'Negative Affect Classification for user number {userNumber} : {negative_class}')
            userNumber += 1



    await calculateScores()

    await mpc.shutdown()

mpc.run(main())