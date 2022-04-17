let minimum_avg_score =50;
//test data 1
let NepalA_Avg1= (46 + 58 + 39)/3;
let NepalB_Avg1 = (48 + 41 + 60)/3;
console.log(NepalA_Avg1);
console.log(NepalB_Avg1);

if( (NepalA_Avg1 > NepalB_Avg1) && (NepalA_Avg1 > minimum_avg_score)){
    console.log("Nepal A is winner in the first round...");
}
else if((NepalB_Avg1 > NepalA_Avg1) && (NepalB_Avg1 > minimum_avg_score)){
    console.log("Nepal B is winner in the first round...");
}
else if((NepalB_Avg1 == NepalA_Avg1) && ((NepalB_Avg1 && NepalA_Avg1)> minimum_avg_score)){
    console.log("Game Draw...");
}
else{
    console.log("Oops sorry minimum average score is not fulfilled... ");
}
//test data 2
let NepalA_Avg2 = (47 + 62 + 51)/3;
let NepalB_Avg2 = (59 + 45 + 73)/3;
console.log(NepalA_Avg2);
console.log(NepalB_Avg2);

if( (NepalA_Avg2 > NepalB_Avg2) && (NepalA_Avg2 > minimum_avg_score)){
    console.log("Nepal A is winner in the second round...");
}
else if((NepalB_Avg2 > NepalA_Avg2) && (NepalB_Avg2 > minimum_avg_score)){
    console.log("Nepal B is winner in the second round...");
}
else if((NepalB_Avg2 == NepalA_Avg2) && ((NepalB_Avg2 && NepalA_Avg2)> minimum_avg_score)){
    console.log("Game Draw...");
}
else{
    console.log("Oops sorry minimum average score is not fulfilled... ");
}

//test data 3
let NepalA_Avg3 =(47 + 62 + 51)/3;
let NepalB_Avg3 =(59 + 45 + 56)/3;
console.log(NepalA_Avg3);
console.log(NepalB_Avg3);

if( (NepalA_Avg3 > NepalB_Avg3) && (NepalA_Avg3> minimum_avg_score)){
    console.log("Nepal A is winner in the third round...");
}
else if((NepalB_Avg3 > NepalA_Avg3) && (NepalB_Avg3 > minimum_avg_score)){
    console.log("Nepal B is winner in the third round...");
}
else if((NepalB_Avg3 == NepalA_Avg3) && ((NepalB_Avg3 && NepalA_Avg3)> minimum_avg_score)){
    console.log("Game Draw...");
}
else{
    console.log("Oops sorry minimum average score is not fulfilled... ");
}


