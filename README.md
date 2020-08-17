# GitTest
a test for git using

start：https://www.cnblogs.com/ql123456/p/10626810.html

git push：https://www.cnblogs.com/cxk1995/p/5800196.html

git init：https://www.cnblogs.com/ql123456/p/10626810.html

git ignore：https://www.jianshu.com/p/a49124700abc

gitee push：https://www.cnblogs.com/qhorse/p/9599794.html

## 创建

git clone https://github.com/lenkasetGitHub/GitTest.git

cd GitTest

git add .        （注：别忘记后面的.，此操作是把Test文件夹下面的文件都添加进来）

git commit  -m  "提交信息"  （注：“提交信息”里面换成你需要，如“first commit”）

git push -u origin master   （注：此操作目的是把本地仓库push到github上面，此步骤需要你输入帐号和密码）

## 更新

git add .

git commit  -m  "提交信息"

git push -u origin master

## 创建.gitignore文件
1) 常规的windows操作

根目录下创建gitignore.txt；
编辑gitignore.txt，写下你的规则，例如加上node_modules/；
打开命令行窗口，切换到根目录（可以直接在文件夹上面的地址栏输入cmd回车）；
执行命令ren gitignore.txt .gitignore。

2) 用Git Bash

根目录下右键选择“Git Bash Here”进入bash命令窗口；
输入vim .gitignore或touch .gitignore命令，打开文件（没有文件会自动创建）；
按i键切换到编辑状态，输入规则，例如node_modules/，然后按Esc键退出编辑，输入:wq保存退出。

## 删除文件
1. 在本地仓库删除指定文件
git rm 文件名名称
2. 在本地仓库删除指定文件夹
git rm -r 文件夹/
3. 提交修改
git commit -m"删除文件夹"
4. 推送到远程仓库
git push origin 远程仓库连接
5. git  rm命令
git rm -h
用法：git rm [<选项>] [--] <文件>...
    -n, --dry-run         演习
    -q, --quiet           不列出删除的文件
    --cached              只从索引区删除
    -f, --force           忽略文件更新状态检查
    -r                    允许递归删除
    --ignore-unmatch      即使没有匹配，也以零状态退出
　　
