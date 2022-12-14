BOOL

0
1

&& - and
Both values are true
(1 && 1) //true
(0 && 0)//false


|| - or
at least one value is true. 
(0 || 1)//true 
(1 || 0)//true
(1 || 1)//true
(0 || 0) //false
-1-0- TRUE

! - not // bang operator ~A
* Lightswitch is on
!lightswintch is on = Lightswitch is off

var x = true;
var y = !x; //false


## EQUALITY OPERATIONS
==, >, >=, <, <=, !=, ===

### == Equal to
7 == 8 //false 
8 == 8 //true 
(2 + 3) == 5 //true
(3 +3) == (4+3) //false

### > Greater than
7 > 8 //false
5 > 5 //false
10 > 5 //true 

### >= Greater than equal
7 >= 8 //false
5 >= 5 //true
10 >= 5 //true

### != not equal to
7 != 8 //true
7 != 7 //false 


### === strictly equal to
(equal in value && in type)
7 === 7 //true
7 === '7' //false



## EXAMPLES True or false

[(5 + 3) > (2)] && [2+3] >= 5 -> TRUE
    8 > 2 //true  &&  5 >=5 //true

(4 > 3) || (5 > 5) -> TRUE

((4 > 3) || (5 > 5)) && ([(5 + 3) > (2)] && [2+3])  -> TRUE

(5 == 4) && (4 == 4) //false

![(5 == 4) && (4 == 4)] -> TRUE

5 != 4 && 4==3 //false


## For Loops
- loops that will continue up to a set stop point


## While Loops
- loops that continue until a condition is met

## DO WHILE
- loops that run at least once