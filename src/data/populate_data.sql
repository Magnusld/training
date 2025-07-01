BEGIN TRANSACTION;

-- Populate week Table
INSERT INTO week (week_number, start_date, focus, total_weekly_km) VALUES
(1, '2025-05-05', 'Base Building - Consistency', 29.40),
(2, '2025-05-12', 'Base Building - Mileage Increase', 30.00),
(3, '2025-05-19', 'Unexpected Light Week (Sickness)', 5.00),
(4, '2025-05-26', 'Getting Back on Track - Mileage & Intensity', 43.00),
(5, '2025-06-02', 'Building Endurance & Speed', 44.60),
(6, '2025-06-09', 'Increasing MP Volume', 41.00),
(7, '2025-06-16', 'Threshold & Longer MP Segments', 48.00),
(8, '2025-06-23', 'Recovery Week', 35.00),
(9, '2025-06-30', 'Peak Building - Marathon Specificity', 50.00),
(10, '2025-07-07', 'Peak Building - Strength and Speed', 55.40),
(11, '2025-07-14', 'Peak Building - Endurance Challenge', 51.00),
(12, '2025-07-21', 'Slight Recovery/Adaptation Week', 41.00),
(13, '2025-07-28', 'Peak Week 1 - Longest MP Run', 66.00),
(14, '2025-08-04', 'Peak Week 2 - Longest Run, Fast Finish', 64.00),
(15, '2025-08-11', 'Gentle Taper Start - Maintaining Some Quality', 48.00),
(16, '2025-08-18', 'Taper Week 2 (12-14 days out) - Sharpening', 34.00),
(17, '2025-08-25', 'Final Taper (7-10 days out)', 23.00),
(18, '2025-09-01', 'RACE WEEK!', 51.20);

-- Populate day Table
-- Week 1
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 1), '2025-05-05', 'Monday', 'Rest or XT', '30-45 min light cross-training', NULL, 'Focus on active recovery if sore.'),
((SELECT week_id FROM week WHERE week_number = 1), '2025-05-06', 'Tuesday', 'Easy Run', '5km', '5:50 - 6:30 min/km', 'Keep it very comfortable.'),
((SELECT week_id FROM week WHERE week_number = 1), '2025-05-07', 'Wednesday', 'Easy Run', '6km', '5:50 - 6:30 min/km', 'Focus on form.'),
((SELECT week_id FROM week WHERE week_number = 1), '2025-05-08', 'Thursday', 'Intervals', '10 min warm-up. 6 x 400m with 400m jog recovery. 10 min cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). 400m Repeats: 4:20 - 4:35 min/km (1:44-1:49 per 400m). Recovery Jogs: Very slow.', 'Focus on consistent effort.'),
((SELECT week_id FROM week WHERE week_number = 1), '2025-05-09', 'Friday', 'Rest', '', NULL, 'Prepare for the long run.'),
((SELECT week_id FROM week WHERE week_number = 1), '2025-05-10', 'Saturday', 'Long Run', '10km', '5:50 - 6:30 min/km', 'Slow and steady.'),
((SELECT week_id FROM week WHERE week_number = 1), '2025-05-11', 'Sunday', 'Easy Run or XT', '4km or 30 min XT', 'If running: 5:50 - 6:30 min/km', 'Recovery effort.');

-- Week 2
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 2), '2025-05-12', 'Monday', 'Rest or XT', '30-45 min cross-training', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 2), '2025-05-13', 'Tuesday', 'Easy Run', '6km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 2), '2025-05-14', 'Wednesday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 2), '2025-05-15', 'Thursday', 'Tempo Run', '10 min warm-up. 20 min Tempo. 10 min cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). Tempo: 5:10 - 5:30 min/km.', 'Comfortably hard.'),
((SELECT week_id FROM week WHERE week_number = 2), '2025-05-16', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 2), '2025-05-17', 'Saturday', 'Long Run', '12km', '5:50 - 6:30 min/km', 'Maintain consistent easy pace.'),
((SELECT week_id FROM week WHERE week_number = 2), '2025-05-18', 'Sunday', 'Easy Run or Rest', '5km or Rest', 'If running: 5:50 - 6:30 min/km', 'Listen to your body.');

-- Week 3
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 3), '2025-05-19', 'Monday', 'Rest', 'Missed due to sickness', NULL, 'Focus on recovery.'),
((SELECT week_id FROM week WHERE week_number = 3), '2025-05-20', 'Tuesday', 'Rest', 'Missed due to sickness', '', ''),
((SELECT week_id FROM week WHERE week_number = 3), '2025-05-21', 'Wednesday', 'Rest', 'Missed due to sickness', '', ''),
((SELECT week_id FROM week WHERE week_number = 3), '2025-05-22', 'Thursday', 'Rest', 'Missed due to sickness', '', ''),
((SELECT week_id FROM week WHERE week_number = 3), '2025-05-23', 'Friday', 'Rest', 'Missed due to sickness', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 3), '2025-05-24', 'Saturday', 'Rest', 'Missed due to sickness', '', ''),
((SELECT week_id FROM week WHERE week_number = 3), '2025-05-25', 'Sunday', 'Easy Run', '5km', '5:50 - 6:30 min/km', 'Completed. Feeling better.');

-- Week 4
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 4), '2025-05-26', 'Monday', 'Rest or XT', '30 min light XT or Rest', NULL, 'Ease back in.'),
((SELECT week_id FROM week WHERE week_number = 4), '2025-05-27', 'Tuesday', 'Easy Run', '7km', '5:50 - 6:30 min/km', 'Focus on feel.'),
((SELECT week_id FROM week WHERE week_number = 4), '2025-05-28', 'Wednesday', 'Easy Run', '8km', '5:50 - 6:30 min/km', 'Building consistency.'),
((SELECT week_id FROM week WHERE week_number = 4), '2025-05-29', 'Thursday', 'Intervals', '10 min warm-up. 8 x 400m with 400m jog recovery. 10 min cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). 400m Repeats: 4:20 - 4:35 min/km. Recovery Jogs: Very slow.', 'Reintroducing speed work.'),
((SELECT week_id FROM week WHERE week_number = 4), '2025-05-30', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 4), '2025-05-31', 'Saturday', 'Long Run', '16km', '5:50 - 6:30 min/km. Option: Last 2-3km @ MP (5:41 min/km) if feeling good.', 'Building endurance back.'),
((SELECT week_id FROM week WHERE week_number = 4), '2025-06-01', 'Sunday', 'Easy Run or Rest', '6km or Rest', 'If running: 5:50 - 6:30 min/km', '');

-- Week 5
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 5), '2025-06-02', 'Monday', 'Rest or XT', '30-45 min cross-training', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 5), '2025-06-03', 'Tuesday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 5), '2025-06-04', 'Wednesday', 'Marathon Pace Run', '2km warm-up. 5km @ MP. 1km cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). Main Set: 5:41 min/km.', 'Focus on MP rhythm.'),
((SELECT week_id FROM week WHERE week_number = 5), '2025-06-05', 'Thursday', 'Intervals', '10 min warm-up. 5 x 800m with 400m jog recovery. 10 min cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). 800m Repeats: 4:30 - 4:45 min/km (3:36-3:48 per 800m). Recovery Jogs: Very slow.', ''),
((SELECT week_id FROM week WHERE week_number = 5), '2025-06-06', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 5), '2025-06-07', 'Saturday', 'Long Run', '18km with 5km @ MP', 'Easy portions: 5:50 - 6:30 min/km. MP segment: 5:41 min/km (e.g., km 10-15).', 'Integrate MP into long run.'),
((SELECT week_id FROM week WHERE week_number = 5), '2025-06-08', 'Sunday', 'Easy Run or XT', '6km or 30 min XT', 'If running: 5:50 - 6:30 min/km', '');

-- Week 6
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 6), '2025-06-09', 'Monday', 'Rest or XT', '30-45 min cross-training', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 6), '2025-06-10', 'Tuesday', 'Easy Run', '8km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 6), '2025-06-11', 'Wednesday', 'Tempo Run', '10 min warm-up. 25 min Tempo. 10 min cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). Tempo: 5:10 - 5:30 min/km.', ''),
((SELECT week_id FROM week WHERE week_number = 6), '2025-06-12', 'Thursday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 6), '2025-06-13', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 6), '2025-06-14', 'Saturday', 'Long Run', '20km with 2x3km @ MP', 'Easy portions: 5:50 - 6:30 min/km. MP segments: 5:41 min/km (e.g., km 8-11 & 14-17), with 1-2km easy between.', 'Practice fueling.'),
((SELECT week_id FROM week WHERE week_number = 6), '2025-06-15', 'Sunday', 'Easy Run or Rest', '6km or Rest', 'If running: 5:50 - 6:30 min/km', '');

-- Week 7
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 7), '2025-06-16', 'Monday', 'Rest or XT', '30-45 min cross-training', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 7), '2025-06-17', 'Tuesday', 'Easy Run', '8km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 7), '2025-06-18', 'Wednesday', 'Threshold Intervals', '10 min warm-up. 3 x 10 min @ Threshold (or 3 x 2km). 5 min jog recovery. 10 min cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). Threshold: 4:45 - 5:00 min/km. Recovery Jogs: Very slow.', 'Sustained harder efforts.'),
((SELECT week_id FROM week WHERE week_number = 7), '2025-06-19', 'Thursday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 7), '2025-06-20', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 7), '2025-06-21', 'Saturday', 'Long Run', '22km with 8km @ MP', 'Easy portions: 5:50 - 6:30 min/km. MP segment: 5:41 min/km (e.g., km 12-20).', 'Focus on even MP pacing.'),
((SELECT week_id FROM week WHERE week_number = 7), '2025-06-22', 'Sunday', 'Easy Run or XT', '5km or 40 min XT', 'If running: 5:50 - 6:30 min/km', '');

-- Week 8
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 8), '2025-06-23', 'Monday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 8), '2025-06-24', 'Tuesday', 'Easy Run', '6km', '6:00 - 6:40 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 8), '2025-06-25', 'Wednesday', 'Easy Run', '7km', '6:00 - 6:40 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 8), '2025-06-26', 'Thursday', 'Easy Run', '6km with 4-6 x 100m strides', 'Run: Easy (6:00 - 6:40 min/km). Strides: Fast but relaxed (3:45 - 4:15 min/km)', ''),
((SELECT week_id FROM week WHERE week_number = 8), '2025-06-27', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 8), '2025-06-28', 'Saturday', 'Long Run', '16km', '6:00 - 6:40 min/km', 'Reduced distance.'),
((SELECT week_id FROM week WHERE week_number = 8), '2025-06-29', 'Sunday', 'Rest or XT', '30 min light XT', NULL, '');

-- Week 9
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 9), '2025-06-30', 'Monday', 'Rest or XT', '30-45 min cross-training', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 9), '2025-07-01', 'Tuesday', 'Easy Run', '8km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 9), '2025-07-02', 'Wednesday', 'Marathon Pace Run', '2km warm-up. 10km @ MP. 2km cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). Main Set: 5:41 min/km.', 'Solid MP block.'),
((SELECT week_id FROM week WHERE week_number = 9), '2025-07-03', 'Thursday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 9), '2025-07-04', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 9), '2025-07-05', 'Saturday', 'Long Run', '25km with 10km @ MP', 'Easy portions: 5:50 - 6:30 min/km. MP segment: 5:41 min/km (e.g., km 13-23).', 'Good test of MP endurance.'),
((SELECT week_id FROM week WHERE week_number = 9), '2025-07-06', 'Sunday', 'Easy Run or XT', '6km or 40 min XT', 'If running: 5:50 - 6:30 min/km', '');

-- Week 10
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 10), '2025-07-07', 'Monday', 'Rest or XT', '30-45 min cross-training', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 10), '2025-07-08', 'Tuesday', 'Easy Run', '8km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 10), '2025-07-09', 'Wednesday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 10), '2025-07-10', 'Thursday', 'Intervals (VO2 Max)', '10 min warm-up. 5 x 1000m with 600m jog recovery. 10 min cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). 1000m Repeats: 4:30 - 4:45 min/km. Recovery Jogs: Very slow.', 'Strong effort.'),
((SELECT week_id FROM week WHERE week_number = 10), '2025-07-11', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 10), '2025-07-12', 'Saturday', 'Long Run', '28km with 12km @ MP', 'Easy portions: 5:50 - 6:30 min/km. MP segment: 5:41 min/km (e.g., km 14-26). Option: Last 2-3km slightly faster if feeling very good.', 'Focus on hydration and nutrition.'),
((SELECT week_id FROM week WHERE week_number = 10), '2025-07-13', 'Sunday', 'Easy Run or Rest', '5km or Rest', 'If running: 5:50 - 6:30 min/km', '');

-- Week 11
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 11), '2025-07-14', 'Monday', 'Rest or XT', '30-45 min cross-training', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 11), '2025-07-15', 'Tuesday', 'Easy Run', '8km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 11), '2025-07-16', 'Wednesday', 'Tempo Run', '10 min warm-up. 2 x 15 min Tempo with 5 min jog recovery. 10 min cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). Tempo: 5:10 - 5:30 min/km.', 'Sustained effort.'),
((SELECT week_id FROM week WHERE week_number = 11), '2025-07-17', 'Thursday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 11), '2025-07-18', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 11), '2025-07-19', 'Saturday', 'Long Run', '30km with 15km @ MP (broken)', 'Easy portions: 5:50 - 6:30 min/km. MP segments: 3 x 5km @ 5:41 min/km, with 1-2km easy jog/float in between.', 'Simulate race day fueling.'),
((SELECT week_id FROM week WHERE week_number = 11), '2025-07-20', 'Sunday', 'Easy Run or XT', '6km or 40 min XT', 'If running: 5:50 - 6:30 min/km', '');

-- Week 12
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 12), '2025-07-21', 'Monday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 12), '2025-07-22', 'Tuesday', 'Easy Run', '7km', '6:00 - 6:40 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 12), '2025-07-23', 'Wednesday', 'Easy Run', '8km', '6:00 - 6:40 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 12), '2025-07-24', 'Thursday', 'Easy Run with Strides', '6km with 4-6 x 100m strides', 'Run: Easy (6:00 - 6:40 min/km). Strides: Fast but relaxed (3:45 - 4:15 min/km)', ''),
((SELECT week_id FROM week WHERE week_number = 12), '2025-07-25', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 12), '2025-07-26', 'Saturday', 'Long Run', '20km with 5km @ MP', 'Easy: 6:00-6:40 min/km. MP segment: 5:41 min/km.', 'Reduced overall volume.'),
((SELECT week_id FROM week WHERE week_number = 12), '2025-07-27', 'Sunday', 'Rest or XT', '30 min light XT', NULL, '');

-- Week 13
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 13), '2025-07-28', 'Monday', 'Rest or XT', '30 min light cross-training', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 13), '2025-07-29', 'Tuesday', 'Easy Run', '8km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 13), '2025-07-30', 'Wednesday', 'Marathon Pace Run', '2km warm-up. 14km @ MP. 2km cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). Main Set: 5:41 min/km.', 'Longest continuous MP run.'),
((SELECT week_id FROM week WHERE week_number = 13), '2025-07-31', 'Thursday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 13), '2025-08-01', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 13), '2025-08-02', 'Saturday', 'Long Run', '32km with 16km @ MP (broken)', 'Easy portions: 5:50 - 6:30 min/km. MP segments: 2 x 8km @ 5:41 min/km, with 2km easy jog/float in between.', 'Simulate race conditions.'),
((SELECT week_id FROM week WHERE week_number = 13), '2025-08-03', 'Sunday', 'Easy Run or XT', '5km or 30 min XT', 'If running: 6:00 - 6:40 min/km', 'Focus on recovery.');

-- Week 14
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 14), '2025-08-04', 'Monday', 'Rest or XT', '30 min light cross-training', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 14), '2025-08-05', 'Tuesday', 'Easy Run', '8km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 14), '2025-08-06', 'Wednesday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 14), '2025-08-07', 'Thursday', 'Intervals (Threshold/MP mix)', '10 min warm-up. 2 x (3km @ MP, 1km @ Threshold). 2 min jog recovery between sets. 10 min cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). MP: 5:41 min/km. Threshold: 4:45 - 5:00 min/km.', 'Race specific.'),
((SELECT week_id FROM week WHERE week_number = 14), '2025-08-08', 'Friday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 14), '2025-08-09', 'Saturday', 'Long Run', '34km. First 28km easy, last 6km progressive finish (MP down to Tempo).', 'First 28km: 5:50 - 6:30 min/km. Km 29-30 @ MP (5:41). Km 31-32 @ slightly faster than MP (5:30). Km 33-34 @ Tempo (5:10-5:20).', 'THE longest run. Practice mental toughness.'),
((SELECT week_id FROM week WHERE week_number = 14), '2025-08-10', 'Sunday', 'Easy Run or Rest', '5km or Rest. Very important to recover.', 'If running: 6:00 - 6:40 min/km', '');

-- Week 15
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 15), '2025-08-11', 'Monday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 15), '2025-08-12', 'Tuesday', 'Easy Run', '7km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 15), '2025-08-13', 'Wednesday', 'Marathon Pace Run', '2km warm-up. 8km @ MP. 1km cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). Main Set: 5:41 min/km.', 'Maintain feel for MP.'),
((SELECT week_id FROM week WHERE week_number = 15), '2025-08-14', 'Thursday', 'Easy Run', '6km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 15), '2025-08-15', 'Friday', 'Rest or very light XT', '20 min walk/cycle', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 15), '2025-08-16', 'Saturday', 'Long Run', '22km, mostly easy.', '6:00 - 6:40 min/km. Option: 3-4km @ MP in middle if feeling good.', 'Volume reduction begins.'),
((SELECT week_id FROM week WHERE week_number = 15), '2025-08-17', 'Sunday', 'Rest', '', NULL, '');

-- Week 16
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 16), '2025-08-18', 'Monday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 16), '2025-08-19', 'Tuesday', 'Easy Run', '6km', '5:50 - 6:30 min/km', ''),
((SELECT week_id FROM week WHERE week_number = 16), '2025-08-20', 'Wednesday', 'Easy Run with MP', '2km warm-up. 5km @ MP. 1km cool-down.', 'Warm-up/Cool-down: Easy (5:50 - 6:30 min/km). MP Segment: 5:41 min/km.', 'Short burst at race pace.'),
((SELECT week_id FROM week WHERE week_number = 16), '2025-08-21', 'Thursday', 'Easy Run', '5km with 4x100m strides', 'Run: Easy (5:50 - 6:30 min/km). Strides: Fast but relaxed (3:45 - 4:15 min/km)', 'Stay loose.'),
((SELECT week_id FROM week WHERE week_number = 16), '2025-08-22', 'Friday', 'Rest', '', NULL, 'Focus on hydration and nutrition.'),
((SELECT week_id FROM week WHERE week_number = 16), '2025-08-23', 'Saturday', 'Long Run', '15km, easy.', '6:00 - 6:40 min/km', 'Confidence booster.'),
((SELECT week_id FROM week WHERE week_number = 16), '2025-08-24', 'Sunday', 'Rest', '', NULL, '');

-- Week 17
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 17), '2025-08-25', 'Monday', 'Rest', '', NULL, ''),
((SELECT week_id FROM week WHERE week_number = 17), '2025-08-26', 'Tuesday', 'Easy Run', '5km', '6:00 - 6:40 min/km (very easy)', 'Very easy.'),
((SELECT week_id FROM week WHERE week_number = 17), '2025-08-27', 'Wednesday', 'Easy Run with MP & Strides', '1km warm-up. 3km @ MP. 2-3 strides. 1km cool-down.', 'Warm-up/Cool-down: Easy (6:00 - 6:40 min/km). MP Segment: 5:41 min/km. Strides: Fast but relaxed (3:45 - 4:15 min/km)', 'Legs fresh.'),
((SELECT week_id FROM week WHERE week_number = 17), '2025-08-28', 'Thursday', 'Rest or Very Light Jog', '2-3km very slow jog or complete rest', 'If jogging: Very easy (6:40 min/km or slower)', 'Prepare race gear.'),
((SELECT week_id FROM week WHERE week_number = 17), '2025-08-29', 'Friday', 'Rest', 'Final prep, hydrate, eat well.', NULL, 'Visualize success!'),
((SELECT week_id FROM week WHERE week_number = 17), '2025-08-30', 'Saturday', 'Easy Run', '8km', '6:00 - 6:40 min/km', 'Final ''longish'' run before race week.'),
((SELECT week_id FROM week WHERE week_number = 17), '2025-08-31', 'Sunday', 'Rest', '', NULL, '');

-- Week 18
INSERT INTO day (week_id, activity_date, day_of_week, activity, details, pace_guide, notes) VALUES
((SELECT week_id FROM week WHERE week_number = 18), '2025-09-01', 'Monday', 'Rest or Very Light Jog', '3km very easy jog if feeling restless, otherwise rest.', 'If jogging: Very easy (6:40 min/km or slower)', 'Focus on sleep and nutrition.'),
((SELECT week_id FROM week WHERE week_number = 18), '2025-09-02', 'Tuesday', 'Easy Run', '4km with 2-3 x 100m strides', 'Run: Easy (6:00 - 6:40 min/km). Strides: Fast but relaxed (3:45 - 4:15 min/km)', 'Keep legs moving, but very light.'),
((SELECT week_id FROM week WHERE week_number = 18), '2025-09-03', 'Wednesday', 'Rest', '', NULL, 'Hydrate, relax. Check race day logistics.'),
((SELECT week_id FROM week WHERE week_number = 18), '2025-09-04', 'Thursday', 'Very Light Jog / Shakeout', '2km very easy, 2 x 100m strides', 'Jog: Very easy (6:40 min/km or slower). Strides: Fast but relaxed (3:45 - 4:15 min/km)', 'Stay loose. Don''t do too much.'),
((SELECT week_id FROM week WHERE week_number = 18), '2025-09-05', 'Friday', 'COMPLETE REST', 'Eat well (focus on carbs), hydrate. Lay out race kit.', NULL, 'Believe in your training!'),
((SELECT week_id FROM week WHERE week_number = 18), '2025-09-06', 'Saturday', 'MARATHON DAY!', '42.2km. Goal: Sub 4 hours! Trust your plan.', 'Target: 5:41 min/km', 'Enjoy the experience!'),
((SELECT week_id FROM week WHERE week_number = 18), '2025-09-07', 'Sunday', 'Active Recovery / CELEBRATE!', 'Short walk if you feel up to it. Bask in the glory!', NULL, 'You did it!');

COMMIT TRANSACTION;

