
## Language Transact-SQL ##
---
- Author: D. Despain
- Date: 03/08/06
- Info: n/a
- Score:  (1.00 in 1 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-transact-sql-1081.html
---

```/*         Object: 99 Bottles of Beer Lyrics
 Modification Log: Date        Author      Description
                   09/21/2005  D. Despain  Prints lyrics as message, not a
                                           result-set table.  Based on original
                                           created by Joseph Thoennes, 
                                           thoennes@paranet.com */
    SET NOCOUNT ON
        DECLARE @Verse VARCHAR(125)
   CREATE TABLE #beer (bottle TINYINT IDENTITY)
          WHILE (
                 SELECT ISNULL(MAX(bottle), 0)
                   FROM #beer
                ) < 99
    INSERT INTO #beer DEFAULT VALUES
        DECLARE MyCursor1 CURSOR
            FOR
                  SELECT [Sing it!]
                    FROM (
                               SELECT bottle
                                    , LTRIM(str(bottle))
                                      + ' bottle'
                                      + CASE WHEN bottle > 1
                                             THEN 's'
                                             ELSE ''
                                              END
                                      + ' of beer on the wall, '
                                      + LTRIM(str(bottle))
                                      + ' bottle'
                                      + CASE WHEN bottle > 1
                                             THEN 's'
                                             ELSE ''
                                              END
                                      + ' of beer, take '
                                      + CASE WHEN bottle > 1
                                             THEN 'one'
                                             ELSE 'it'
                                              END
                                      + ' down, pass it around, '
                                      + CASE WHEN bottle - 1 > 0
                                             THEN LTRIM(str(bottle - 1))
                                             ELSE 'no more'
                                              END
                                      + ' bottle'
                                      + CASE WHEN bottle - 1 <> 1
                                             THEN 's'
                                             ELSE ''
                                              END
                                      + ' of beer on the wall!' [Sing it!]
                                FROM #beer
                           UNION ALL
                              SELECT 0
                                   , 'No more bottles of beer on the wall, '
                                     + 'no more bottles of beer, '
                                     + 'go to the store, buy some more, '
                                     + '99 bottles of beer on the wall!'
                          ) x
                ORDER BY bottle DESC
           OPEN MyCursor1
FETCH NEXT FROM MyCursor1
           INTO @Verse
          WHILE @@FETCH_STATUS = 0
                          BEGIN
                          PRINT @Verse
                FETCH NEXT FROM MyCursor1
                           INTO @Verse
                            END
          CLOSE MyCursor1
     DEALLOCATE MyCursor1
     DROP TABLE #beer```