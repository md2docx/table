# Markdown Syntax Showcase

### Table with html

| Left-aligned             | Center-aligned | Right-aligned |
| :----------------------- | :------------: | ------------: |
| Text 1 <br>- second line |     Text 2     |        Text 3 |

## 4. Tables

Structuring data in tabular format.

| Name  | Age | Location        |
| ----- | --- | --------------- |
| John  | 25  | \_\_\_ New York |
| Alice | 30  | San Francisco   |
| Bob   | 28  | London          |

### Table with md alignments

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| Text 1       |     Text 2     |        Text 3 |

## 13. HTML Elements

### 13.3. Combining Markdown and HTML

> This is a **blockquote** with an embedded **HTML table**:
>
> <table border="1">
>   <tr>
>     <th>Feature</th>
>     <th>Supported</th>
>   </tr>
>   <tr>
>     <td>Markdown</td>
>     <td>✅ <span>*</span><p>I mean not inside **html tables**.</p><span><i>Just making it a bit more nested</i></span></td>
>   </tr>
>   <tr>
>     <td>HTML</td>
>     <td>✅</td>
>   </tr>
> </table>

#### Advanced Table

<table border="1">
   <tr>
     <th>Feature</th>
     <th>Supported</th>
   </tr>
   <tr>
     <td>Markdown</td>
     <td>✅</td>
   </tr>
   <tr>
     <td>HTML</td>
     <td>✅</td>
   </tr>
   <tr>
     <td>Table in Cell</td>
     <td>
       <table border="1">
        <tr>
          <th>Feature</th>
          <th>Supported</th>
        </tr>
        <tr>
          <td>Markdown</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>HTML</td>
          <td>✅</td>
        </tr>
      </table>
    </td>
   </tr>
</table>
