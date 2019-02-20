---
layout: post
title: "프로그래머스: 완주하지 못한 선수"
keywords: 프로그래머스 완주하지못한선수 알고리즘 해시
description: '프로그래머스 완주하지 못한 선수 풀이'
date: 2019-02-19 14:20:00 +0900
tags: study algorithm level1
categories: algorithm programmers
identifier: ap1
---

# [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42576)

# 해시 레벨 1. 완주하지 못한 선수

## 방식 1

> 정렬의 중요성.

{% highlight javascript %}
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.find((p, pi) => {
        return p !== completion[pi];
    })
}
{% endhighlight %}