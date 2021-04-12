## 交作業流程

1. 先透過 git 的指令

```
git branch <branch_name>
```

2. 接著切換到指定的 branch

```
git checkout <branch_name>
```

3. 編輯作業檔案後，如果有改動就新增進版控中

```
git add .
```

4. 提交改動到 branch 中

```
git commit -am <message>
```

5. push 到 github 上讓發 pull request

```
git push origin <branch_name>
```

6. 到自己的 repo 去發起 pull request

7. 把 PR 的連結複製起來，並且在學習系統上繳交作業

### 作業改完 merge 之後

1. 切換到 master

```
git check out master
```

2. 把最新的改動給 pull 下來

```
git pull origin master
```

3. 刪除已經 merge 的 branch

```
git branch -d <branch_name>
```
