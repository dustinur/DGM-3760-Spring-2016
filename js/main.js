//This is where the JS magig happens

  // Add Ref to Firebase
var messagesRef = new Firebase("https://dgmassign.firebaseio.com/");

  // Register the Dom Elaments with jQuery
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var messageList = $('#example-messages');

  // Listem for Enter press
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
        console.log("Great")
      //save data to firebase and clear the message field
        
        var name = nameField.val();
        var message = messageField.val();
        
        messagesRef.push({name: name, text: message});
        
        messageField.val('')
    }
  });

  // Add a callback that is triggered for each chat message.
messagesRef.on("child_added", function(snapshot, prevChildKey) {
  var newMessage = snapshot.val();
    
    var username = newMessage.name;
    var message = newMessage.text;
    
    console.log(newMessage);
      

    var messageElement = $("<li>");
    var nameElement = $("<strong class='example-chat-username'></strong>");

    nameElement.text(username);
    messageElement.text(message).prepend(nameElement);

    messageList.append(messageElement);

    messageList[0].scrollTop = messageList[0].scrollHeight;



      // Add the message to messageList

      //Scroll to bottom of MessageList
})
