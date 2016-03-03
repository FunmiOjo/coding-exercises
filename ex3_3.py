#Think Complexity Exercise 3.3
"""Write a function called bisection that takes a sorted list and a target value
and returns the index of the value in the list, if it's there, or None if it's
not"""

def bisection(sorted_list, target_value):
   if target_value < sorted_list[0] or target_value > sorted_list[-1]:
       return None
        
   start = 0
   end = len(sorted_list) - 1
   mid = (start + end) / 2
   
   while len(sorted_list[start:end]) > 1:
       if sorted_list[mid] == target_value:
            return mid
            
       if sorted_list[mid] < target_value:
            start = mid
            mid = (start + end) / 2
            
            
       if sorted_list[mid] > target_value:
            end = mid
            mid = (start + end) / 2
                
   return None
        
    
def main():        
    numbers = [1,2,3,4,5,6,7,8,9,10,12,13,14,15]

    print bisection(numbers, 11)




if __name__ == "__main__":
    main()    

