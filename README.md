# Proyek Individu

## DTSPRO2022-GOL3-2 TIM A6

# Pelatihan PROA Digitalent

## simpletask-frontend

![image](https://user-images.githubusercontent.com/4899660/183475919-ae793aa0-9366-4ea4-bb67-d63bed85d137.png)

Preview : https://awang.karisma.id/simpletask-frontend/

## Requirements

1. Node v16
2. Yarn (or any package manager)

## Installation Steps

Clone repo and install dependencies

```
git clone https://github.com/awang-karisma/simpletask-frontend
cd simpletask-frontend
yarn
```

then set backend url from environment variable, change accordingly

### Windows

```
$env:VITE_BACKEND_URL="http://localhost:8000"
```

### Linux

```
export VITE_BACKEND_URL=http://localhost:8000
```

if you want to host in Github Pages or hosting it inside subdirectory, add `BASE_URL` to environment variable.

### Windows

```
$env:BASE_URL="/simpletask-frontend"
```

### Linux

```
export BASE_URL=/simpletask-frontend
```

## Developing

I use eslint and prettier to make my code consistent.

```
yarn format         // format files with prettier
yarn lint           // lint with prettier then eslint
yarn lint --fix     // force format files with eslint
```

also added husky to run `yarn lint` pre-commit.
