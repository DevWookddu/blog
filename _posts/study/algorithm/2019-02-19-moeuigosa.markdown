---
layout: post
title: "프로그래머스: 모의고사"
keywords: 프로그래머스 모의고사 알고리즘 완전탐색
description: '프로그래머스 모의고사 풀이'
date: 2019-02-19 14:20:00 +0900
tags: study algorithm level1
---

# [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42840)

# 완전탐색 레벨 1. 모의고사

{% highlight javascript %}
function solution(answers) {
    var answer = [];
    var count = [0, 0, 0];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((ans, i) => {
        count[0] += (a1[i%5] === ans) ? 1 : 0;
        count[1] += (a2[i%8] === ans) ? 1 : 0;
        count[2] += (a3[i%10] === ans) ? 1 : 0;
    });
    
    var max = 0;
    count.forEach((c, i) => {
        if (max === c) {
            answer.push(i + 1);
        } else if (max < c) {
            max = c;
            answer = [i + 1];
        }
    });
    
    return answer.sort();
}
{% endhighlight %}

