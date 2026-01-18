package main

var stats = map[string]int{
	"AGE_18_30": 0,
	"AGE_30_60": 0,
	"AGE_60+":   0,
}

func recordAgeGroup(age int) {
	if age < 30 {
		stats["AGE_18_30"]++
	} else if age < 60 {
		stats["AGE_30_60"]++
	} else {
		stats["AGE_60+"]++
	}
}
