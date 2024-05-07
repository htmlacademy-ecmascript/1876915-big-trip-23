# Замечания: 
Вместо отдельного файла конфигурации babel с перечислением плагинов:
```
{
"plugins": [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-private-methods",
  "@babel/plugin-proposal-optional-chaining",
  "@babel/plugin-proposal-nullish-coalescing-operator"]
}
```
использован пакет ```@babel/preset-env```, подключаемый в webpack.config
--
## Есть вопрос?
Посмотрите [коллекцию часто задаваемых вопросов по Git](http://firstaidgit.ru).
