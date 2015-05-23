# readme

---

 - 需要点击 *分类列表* 才能添加 *一级分类* ，默认情况下选中的是 *默认分类* 
 - 所有的分类不能重名（子分类不能和父分类重名，不同分类下的子分类也不能重名）
 - 所有的任务不能重名，分属于不同分类下的任务暂时也不能重名
 


----------
####数据格式说明

数据存放在 `localStorage` 中，默认分类中的数据和其他分类中的数据是分开放的

 - totalNum — 未完成任务总数，显示在 *所有任务* 后面
 - defaultNum — 默认分类下未完成任务总数
 - sortList — 存放要在分类列表下显示的分类信息，一级分类和二级分类混存

> 示例如下：

    sortList = [
					{
						'name': 'Baidu-IFE',
						'num': 2
					},
					{
						'name': 'subclass 01',
						'num': 2,
						'parent': 'Baidu-IFE'
					}
				];
**注：** 一级分类和二级分类通过是否有 `parent` 属性区分

 - defaultTasks — 默认分类下的任务信息
 

> 示例如下：

    defaultTasks = [
					{
						'date': '2015-04-28',
						'name': 'to-do 1',
						'state': 'done',
						'content': 'to-do 3 content'
					},
					{
						'date': '2015-4-29',
						'name': 'to-do 3',test
						'state': 'undone',
						'content': 'test content'
					}
				];

 - allTasks — 所有分类（除默认分类）下的任务信息
 

> 示例如下：

    allTasks = [
				{
					'name': 'to-do 1',
					'date': '2015-04-28',
					'state': 'done',
					'subclass': '',
					'class': 'Baidu-IFE',
					'content': 'task3 coding'
				},
				{
					'name': 'to-do 1',
					'date': '2015-04-28',
					'state': 'done',
					'subclass': 'task1', 
					'class': 'Baidu-IFE', 
					'content': 'test task'
				}
			];
