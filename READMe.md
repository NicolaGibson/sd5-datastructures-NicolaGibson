## Data Structures & Algorithms

##PART I: Empirical Analysis of Search Algorithms (30%)
Assignment Description:
You are required to design and implement search algorithms to solve a problem, time-test
the implementations of your algorithms with a range of inputs and then analyse the efficiency
of each algorithm in order to determine the time complexity of each algorithm.
Detailed Specifications:
You will need to implement the linear and the binary search algorithms that make the
computer play a guessing game for a secret number between 1 and N. Each algorithm
should repeatedly guess, adjusting its guesses after every incorrect guess, until it matches
the secret number. You will time-test the algorithms with a range of inputs and then analyse
the time complexity.
You are required to do the following for each algorithm:
a) Design the algorithm (flowchart or pseudocode)
b) Implement the algorithm in Java/JavaScript.
c) Add time testing code into your implementations.
d) Run the code with a large range of test data sets: Test of a range of N from N=1 to
1000000 or even more (or less!) and implement testing code to run the code for
the range of Ns.
e) Record all of your results (write the output to a csv file).
f) Create graphs of your results (y-axis is time; x-axis is number of inputs(N)).
g) Write a reflection on the graphs discussing time complexity of the algorithms, using
Big (O) notation and a discussion of whether your algorithm could be made any
more efficient and how this would affect its time complexity.
Hand in:
1. Design of the algorithm, flowchart or pseudocode (5 marks)
2. Implementation (including data generation and timing code) – complete and fully
commented code listing (10 marks)
3. Report including graphs and reflection (15 marks)

##PART I: Empirical Analysis of Search Algorithms (25%)
Assignment Description:
You are required to design and implement search algorithms to solve a problem, time-test the implementations of your algorithms with a range of inputs and then analyse the efficiency of each algorithm in order to determine the time complexity of each algorithm.
Detailed Specifications:
You will need to implement the linear and the binary search algorithms that make the computer play a guessing game for a secret number between 1 and N. Each algorithm should repeatedly guess, adjusting its guesses after every incorrect guess, until it matches the secret number. You will time-test the algorithms with a range of inputs and then analyse the time complexity.
You are required to do the following for each algorithm:
a) Design the algorithm (flowchart or pseudocode)
b) Implement the algorithm in Java/JavaScript.
c) Add time testing code into your implementations.
d) Run the code with a large range of test data sets: Test of a range of N from N=1 to 1000000 or even more (or less!) and implement testing code to run the code for the range of Ns.
e) Record all of your results (write the output to a csv file).
f) Create graphs of your results (y-axis is time; x-axis is number of inputs(N)).
g) Write a reflection on the graphs discussing time complexity of the algorithms, using Big (O) notation and a discussion of whether your algorithm could be made any more efficient and how this would affect its time complexity.
Hand in:
1. Design of the algorithm, flowchart or pseudocode (5 marks)
2. Implementation (including data generation and timing code) – complete and fully
commented code listing (10 marks)
3. Report including graph and reflection (10 marks)
2|Page
 
 PART II: Egg Dropping Problem (25%)
The Egg Dropping Puzzle is a mathematical puzzle that has been around the internet for some time now, which is known to be adopted in interviews of major companies like Google, Microsoft, Accenture and even Hewlett Packard.
You are given 2 identical eggs. You have access to a 100-storey building. Eggs can be very hard or very fragile means it may break if dropped from the first floor or may not even break if dropped from 100th floor. But if an egg breaks from certain floor it will certainly break from higher floors too. The challenge is to figure out the highest floor of a 100-storey building an egg can be dropped without breaking (critical floor). Now the question is how many drops you need to get certain about the floor from which eggs start breaking. You are allowed to break only 2 eggs in the process.
Assumptions in the Egg Dropping Puzzle:
i. The two eggs are identical.
ii. If an egg does not break by dropping from a certain floor, it will not break dropping from any floor below that.
iii. If an egg breaks by dropping on a certain floor, it will break dropping from any floor above that.
iv. An egg may break by dropping on the 1st floor.
v. An egg may not break by dropping even on the 100th floor.
The minimum number of attempts required in the worst case scenario to find the critical floor, as discussed in the class is 14.
a) Without showing any mathematical proof, work out the critical floor for a 100-storey building, but with 3 eggs. With the aid of a table, similar to the one discussed in the class, or otherwise justify your answer.
https://brilliant.org/wiki/egg-dropping/
N eggs, k floors
The problem can be extended to a general case with k floors and N identical eggs. You are required to design and implement a recursive algorithm to find the minimum number of attempts required in the worst case scenario to find the critical floor.
Detailed Specification
1. Implement your designed algorithm in JavaScript (no flowchart / Pseudocode needed).
2. Design a test plan and run your code for different floors and number of eggs. See below an example of the output run:
3|Page
     
 Sample output:
Minimum number of drops required in worst case with 10 floors and 2 eggs is: 4 drops
Or
Minimum number of drops required in worst case with 20 floors and 4 eggs is: 5 drops
3. Write a short reflection report on:
i. the efficiency of your recursive algorithm.
ii. the time complexity of the algorithms in Big(O) notation; for this you either justify your answer by a reasonable explanation or plot a graph to support you answer.
iii. any improvement that you may suggest to overcome any deficiency that you may have mentioned in section (i).
 Hand in:
1. Implementation– complete and fully commented code listing
2. Test Plan
3. Reflection Report
(10 marks) (5 marks)
(10 marks)
