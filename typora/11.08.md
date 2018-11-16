# 11.08(GIT)

## GIT

linux-리누스토발즈가 git을 만듦.

## 1

https://git-scm.com/(bash here-깃을 사용하기 위한 것)

https://git-scm.com/book/ko/v2

https://git-scm.com/download/gui/win( [GitKraken](https://www.gitkraken.com/), 
[SourceTree](https://www.sourcetreeapp.com/)-무겁고 느리다.,
[GitHub Desktop](https://desktop.github.com/))



## 2

https://github.com/ - https://github.com/account/unverified-email

새로운 파일 생성하는것을 new repository라고 함. ym_test 생성

디렉토리 파일 들어가서 git bash here실행

git clone 하고 new repository에서의 주소 복사후 붙여넣기(shift+insert)

git config --global user.name "ym(사용자 이름 내가 설정하기)" 쓰고
=>자리가 바뀌면 사용자 이름 바꿔야함

+git config --global user.email "yoomin476456@gmail.com"

+echo "# ym" >> README.md

+cd ym_test/

+git status                =>아직 서버와 연결안됨. 빨간 README뜸



+git add README.md

+git status  

+git commit -m "first make file is README.md(내가쓰고싶은 설명)"

+git status      



{git push -u origin master 이것을 한번은 써야함} -그후엔 git push 만 써도됨

+비밀번호 입력

====>깃허브사이트에서 리드미 생김.

---------------------------------------------------------------------------------------------------------------------

cat README.md 리드미 안에 있는 내용확인

echo "## 추가 내용 작성" >> README.md 안에 내용을 추가

cat README.md 리드미 안에 있는 다시 확인하면 위에 내용 추가되어있음.

git status 다시 써넣으면 아직 추가안된것을 확인할 수 있음. - 빨간글씨

git commit  -a -m "readme파일 내용 처음으로 수정" ------>add없이 바로 넘어감

git push 로 서버 연결

 git push 로 다시 내 이메일로 연결



--------------------------------------------------------

+touch index.html

+echo "index 생성" >> index.html

+git commit -a -m "readme파일 내용 수정, git명령어 추가"

+git status

+git add index.html

+git commit -m "make index.html"

+git status





------------------------------------

git pull은 웹사이트에서 파일 하나 생성

두가지 파일을 만들고 

그 두가지 파일 안에에서 각각 bash here실행하고

두 파일 모두 바쉬에서 git을 실행하고  clone만 함.

하나의 바쉬에서만 파일을 만들고 다른 바쉬에서 pull로 확인





---------------------------------------

https://github.com/yoominkim/ym_test/settings



GitHub Pages에서 마스터로 맨처음에뜬거 선택에서 저장











## 3

git을 사용하는 이유:

 add를 통해 보낼것을 확인- git commit은 보내는 것의 내용(설명)작성 - git push보내는것









# my README file

### git 명령어를 익혀봅시다.



-git clone저장소명:저장소복제하기

-git status 내용 확인

-git add 파일이름:파일첨부하기

-git commit -m"내용" : 필요내용 작성하기

-git commit -a -m"내용" : 수정된 데이터 내용 변경작성하기

-git push -u origin master : 최초의 전송하기

-git push : 이후 전송하기

-git config --global user.name"name" : 컴퓨터에 최초호 사용자 등록

-git config --global user.email "mail...":컴퓨터에 최초로 사용자 메일등록









-------------------------

https://desktop.github.com/ (에러가 많음.)





앞으로 자료올라오는 주소

http://github.com/xidoWeb/uxui1810

--------------------

https://xidoweb.github.io/illustartor_basic/