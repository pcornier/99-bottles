
## Language JBPM ##
---
- Author: Easy
- Date: 06/25/10
- Info: http
- Score:  (3.33 in 3 votes)
- URL: n/a
- Original URL: http://www.99-bottles-of-beer.net/language-jbpm-2434.html
---

```<?xml version="1.0" encoding="UTF-8"?>
<process-definition  xmlns="urn:jbpm.org:jpdl-3.3"  name="99boutles">
	<event type="process-start">
		<script>
			<expression>
		          int a=99;
			</expression>
			<variable name='count' mapped-name='a' access='write'/>
		</script>
	</event>
	<start-state name="start-state1">
		<transition to="do"/>
	</start-state>
	<task-node name="do">
		<transition to="query"/>
	</task-node>
	<decision name="query">
		<transition to="do" name="continue">
			<condition expression="${(count&gt;2 )}"/>
			<script>
				<expression>
		            System.out.println(a + " bottles of beer on the wall");
		            System.out.println(a + " bottles of beer!");
		            System.out.println("Take one down, pass it around");
		            a=a-1;
		            System.out.println(a + " bottles of beer on the wall!");
		            System.out.println(" ");
				</expression>
				<variable name='count' mapped-name='a' access='read,write'/>
			</script>
		</transition>
		<transition to="end-state1" name="end">
			<condition expression="${(count&lt;=0 )}"/>
			<script>
				<expression>
		            System.out.println("No more bottles of beer on the wall");
		            System.out.println("no more bottles of beer");
		            System.out.println("Go to the store and buy some more");
		            System.out.println("99 bottles of beer on the wall.");
		            System.out.println(" ");
				</expression>
			</script>
		</transition>
		<transition to="do" name="to do">
			<condition expression="${(count==1 )}"/>
			<script>
				<expression>
		            System.out.println(new java.lang.String().valueOf(a) + " bottle of beer on the
wall");
		            System.out.println(new java.lang.String().valueOf(a) + " bottle of beer!");
		            System.out.println("Take one down, pass it around");
		            a=a-1;
		            System.out.println("No more bottles of beer on the wall!");
		            System.out.println(" ");
				</expression>
				<variable name='count' mapped-name='a' access='read,write' />
			</script>
		</transition>
	</decision>
	<end-state name="end-state1"/>
</process-definition>```