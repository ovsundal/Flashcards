import {Notifications, Permissions} from 'expo';
import {AsyncStorage} from "react-native";

const NOTIFICATION_KEY = 'Flashcards: Notifications';

export function createLocalNotification() {
    return {
        title: 'Flashcards Reminder',
        body: "Don't forget your daily flashcard quiz!",
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then((status) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(20);
                            tomorrow.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createLocalNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync());
}