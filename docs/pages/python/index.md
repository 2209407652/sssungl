---
title: Python内置方法
---

# str

## maketrans()和 translate()

在 Python 中，`str.maketrans()` 方法用于创建一个转换表，这个转换表可以用于 `str.translate()` 方法进行字符替换操作。`maketrans()` 方法通常接收两个参数：两个等长的字符串，表示将第一个字符串中的字符替换为第二个字符串中对应位置的字符。另外，它还可以接收一个可选的第三个参数，它是一个字符串，表示需要删除的字符集合。

**示例**:

```python
# 定义两个字符串，表示字符替换关系
intab = "aeiou"
outtab = "12345"

# 使用 maketrans 创建转换表
trantab = str.maketrans(intab, outtab)

# 定义一个字符串，准备进行字符替换
original = "this is a test"

# 使用 translate 和转换表进行字符替换
translated = original.translate(trantab)

print(translated)  # 输出: th3s 3s 1 t2st
```

如果你只想删除某些字符，而不是替换它们，你可以传递一个额外的参数给 `maketrans()`，这个参数是一个包含要删除字符的字符串：

**示例**:

```python
# 定义要删除的字符
delchars = "aeiou"

# 使用 maketrans 创建转换表，只包含要删除的字符
trantab = str.maketrans("", "", delchars)

# 定义一个字符串，准备删除其中的某些字符
original = "this is a test"

# 使用 translate 和转换表删除字符
translated = original.translate(trantab)

print(translated)  # 输出: ths s tst
```
