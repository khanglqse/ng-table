# Ang-Table

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Installation
#### Step 1:
In your project run following command:
```
npm i ang-table
```
#### Step 2: Import the NgTableModule, RoutingModule to your AppModule
```
@NgModule({
  declarations: [
    AppComponent,
    OtherComponnetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## APIs

#### Base Settings
|Name   |  Type | Default value | Description  |
|---|---|---|---|
|css| string  | null  | add css  |
|align| string  | `text -left | text-right | text-center`  | add text in table  |
|width| string  | null  | set width for table, td, tr, etc.  |
|height| string  | null  | set height for table, td, tr, etc.  |


### Inputs
|Input   |  Type | Default  | Description  |
|---|---|---|---|
|totalCount| number  | 0  | The number of all record  |
|dataSource| any[]  | []  | The display data source  |
|isLoading| bool  | false  | Show the loading icon in table  |
|sortState| `SortState`  | null  | Default sortState for table  |

### Template
|Template name   |  Type | Default  | Description  |
|---|---|---|---|
| tableColumn | htmlElement  | Init by setting  | Replace the column in table  |
| tableActionButton | htmlElement  | Init by setting  | Replace the column action in table  |
| tableRowTotal | htmlElement  | null  | Additional row for table  |
| tableFooter | htmlElement  | null  | Replace the table footer|
| tableHeaderControl | htmlElement  | Init by setting  | Replace the header action group in table  |
| tableHeader | htmlElement  | Init by setting  | Replace the completely header table  |
| tableRowExpand | htmlElement  | null  | The display template if user click on table row or specific column  |

### Outputs

|Output   | Description  |
|---|---|
|sortStateChange| Fired event on sort  |
|pagingOptionChange| Fired event on paging option change  |


